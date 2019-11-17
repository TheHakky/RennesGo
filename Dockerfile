FROM adoptopenjdk/openjdk11:latest

COPY ./ ./

CMD ["java","-jar","/usr/src/rennesgo/rennesgo-backend-1.0.0-SNAPSHOT.jar"]
