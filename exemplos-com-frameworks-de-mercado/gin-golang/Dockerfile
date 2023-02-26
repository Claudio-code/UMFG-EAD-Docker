FROM golang:1.18 as builder

WORKDIR /go/src/app

COPY . .

RUN go build -o main main.go

EXPOSE 8080

CMD ["./main"]
