# 1단계: Maven 빌드
FROM maven:3.9.2-eclipse-temurin-17 AS build
WORKDIR /app
COPY pom.xml .
COPY src ./src
RUN mvn clean package -DskipTests

# 2단계: JDK만 있는 이미지로 복사
FROM eclipse-temurin:17-jdk-alpine
WORKDIR /app
COPY --from=build /app/target/backend.jar backend.jar
ENV PORT 8080
EXPOSE $PORT
ENTRYPOINT ["java", "-jar", "backend.jar"]