const amqplib = require('amqplib');

const queueName = 'hello';

const consumeMsg = async () => {
    const connection = await amqplib.connect('amqp://localhost');
    const channel = await connection.createChannel();
    await channel.assertQueue(queueName , {durable: false});
    console.log(" [*] Waiting for messages in %s. To exit press CTRL+C", queueName);
    channel.consume(queueName, (msg) => {
        console.log(" [x] Received %s", msg.content.toString());
    }, {noAck: true});
 }
 consumeMsg();