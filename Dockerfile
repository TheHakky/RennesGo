FROM adoptopenjdk/openjdk11:latest

COPY target/rennesgo-backend-1.0.0-SNAPSHOT.jar /usr/src/rennesgo/

CMD ["java","-jar","/usr/src/rennesgo/rennesgo-backend-1.0.0-SNAPSHOT.jar"]
