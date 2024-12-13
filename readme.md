# RabbitMQ Example with Node.js

This project demonstrates how to use RabbitMQ as a message broker with a Node.js application. The example implements a simple **Task Queue** where messages (tasks) are produced and consumed asynchronously.

---

## Features

- **Producer**: Sends messages to a RabbitMQ queue.
- **Consumer**: Listens to the queue and processes messages.
- **Durability**: Ensures tasks persist even if RabbitMQ restarts.
- **Scalability**: Supports multiple consumers for load balancing.

---

## Prerequisites

Before you begin, ensure you have the following installed on your system:

- [Node.js](https://nodejs.org/) (v16 or higher recommended)
- [Docker](https://www.docker.com/) (for running RabbitMQ)

---

## Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/EmanSaeed331/RabbitMq-Nodejs.git
cd rabbitmq-nodejs-example
```
### 2. Install Dependencies
```bash
npm install

```

### 3. Start RabbitMQ Instance (via Docker) From Docker official image 
```
docker run -d --name rabbitmq -p 5672:5672 -p 15672:15672 rabbitmq:3-management
```
 - 5672: Port for AMQP protocol (used by the app).
 - 15672: Port for RabbitMQ Management Console (Web UI).
 - Access the RabbitMQ Management Console at: http://localhost:15672
Default credentials:

    Username: guest
    Password: guest

### 3. Start RabbitMQ Instance From Docker file 
#### 1. Build the Image:
``` bash
docker build -t custom-rabbitmq .
```
#### 2. Run the Container:
```bash
docker run -d --name rabbitmq -p 5672:5672 -p 15672:15672 custom-rabbitmq

```