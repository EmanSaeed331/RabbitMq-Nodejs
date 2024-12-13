const amqplib = require('amqplib');

const queueName = 'hello';
const message = 'Hello World!! from test queue';
const sendMsg = async () => {
    const connection = await amqplib.connect('amqp://localhost');
    const channel = await connection.createChannel();
    await channel.assertQueue(queueName , {durable: false}); // Durable is restarting the queue
    channel.sendToQueue(queueName, Buffer.from(message));
    console.log(" [x] Sent %s", message);
    setTimeout(function() {
        connection.close();
        process.exit(0)
    }, 500);
}

sendMsg();