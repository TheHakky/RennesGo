FROM adoptopenjdk/openjdk11:latest

COPY var/lib/jenkins/workspace/back-end\ pipeline/back-end/target/rennesgo-backend-1.0.0-SNAPSHOT.jar /usr/src/rennesgo/

CMD ["java","-jar","/usr/src/rennesgo/rennesgo-backend-1.0.0-SNAPSHOT.jar"]
