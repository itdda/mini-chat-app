# 1. 베이스 이미지 선택 (JDK 17)
FROM eclipse-temurin:17-jdk-alpine

# 2. 작업 디렉토리 생성
WORKDIR /app

# 3. Maven 빌드 산출물 복사
COPY target/backend.jar backend.jar

# 4. Render가 할당하는 포트 사용
ENV PORT 8080
EXPOSE $PORT

# 5. 실행 커맨드
ENTRYPOINT ["java", "-jar", "backend.jar"]
