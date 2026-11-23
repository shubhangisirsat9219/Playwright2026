
pipeline {
    agent any

    stages {
        stage('Checkout') {
    steps {
        git branch: 'master',
            url: 'https://github.com/shubhangisirsat9219/Playwright2026.git'
         }
      }

        stage('Build') {
            steps {
                echo 'Building application...'
            }
        }

        stage('Test') {
          steps {
             echo 'Testing application...'
             sh 'pwd'
             sh 'ls -la'
          }
       }

        stage('Deploy') {
            steps {
                echo 'Deploying application...'
            }
        }
    }
}
