# build docker image
```bash
    docker build -t custom-rabbitmq .
```
# Run the container
```bash
    docker run -d --name rabbitmq -p 5672:5672 -p 15672:15672 custom-rabbitmq
```