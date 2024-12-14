const amqplib = require('amqplib');

const exchangeName = 'logs';

const receiveMsg = async () => {
   const connection = await amqplib.connect('amqp://localhost');
   const channel = await connection.createChannel();
   await channel.assertExchange(exchangeName, 'fanout', {durable: false});
   const queue = await channel.assertQueue('', {exclusive: true});
   console.log('Waiting for messages in queue', queue.queue);
   channel.bindQueue(queue.queue, exchangeName, '');
   channel.consume(queue.queue , msg => {
    if(msg.content) console.log('Received: ', msg.content.toString());
   } , {noAck: true});
}

receiveMsg();