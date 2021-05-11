FROM openjdk:11
VOLUME /tmp
EXPOSE 8082
ADD /target/SPE_BACKEND-1.0-SNAPSHOT.jar SPE_BACKEND-1.0-SNAPSHOT.jar
ENTRYPOINT ["java", "-jar", "SPE_BACKEND-1.0-SNAPSHOT.jar"]