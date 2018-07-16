pipeline {
  agent any
  tools {
  maven 'maven 3.5.0'
  jdk 'Java8'
  nodejs 'node 8.4.0'
  }

  stages{
    stage('Build Aplication') {
      steps{
        sh "npm install"
      }
    }

    stage('Unit tests') {
      steps{
        sh "npm test"
      }
    }

    stage('Publish Artifact') {
      steps {
        sh "npm publish --registry ${repository_npm}"
      }
    }

    stage('Update Docs') {
      steps {
        sh "npm run gulp sonar --sonarUrl='${URL_SONAR}' --sonarDatabaseUsername='${USER_SONAR}' --sonarDatabasePassword='${PWD_SONAR}'"
      }
    }
  }
}
