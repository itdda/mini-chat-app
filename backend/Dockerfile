FROM maven:3.8.7-openjdk-17 AS build
WORKDIR /app
COPY pom.xml .
COPY src ./src
RUN mvn clean package

FROM openjdk:17-jdk-slim
WORKDIR /app
COPY --from=build /app/target/backend.jar ./app.jar
CMD ["java", "-jar", "/app/app.jar"]
