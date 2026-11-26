
pipeline {
    agent any

    parameters {
        choice(
            name: 'ENVIRONMENT',
            choices: ['Dev', 'QA', 'Production'],
            description: 'Select deployment environment new'
        )
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'master',
                    url: 'https://github.com/shubhangisirsat9219/Playwright2026.git'
            }
        }

        stage('Build Information') {
            steps {
                echo 'Displaying Jenkins Build Information newly'

                sh 'date'
                sh 'whoami'
                sh 'hostname'
                sh 'git log -1 --oneline'
            }
        }

        stage('Selected Environment') {
            steps {
                echo "Selected Environment: ${params.ENVIRONMENT}"
            }
        }

        stage('Test') {
            steps {
                echo 'Testing application...'
                sh 'exit 1'
                sh 'echo "Job Name: $JOB_NAME"'
                sh 'echo "Build Number: $BUILD_NUMBER"'
                sh 'echo "Workspace: $WORKSPACE"'

                sh 'echo "Checking repository files..."'
                sh 'ls -la'
            }
        }

        stage('Deploy') {
            steps {
                echo "Deploying application to ${params.ENVIRONMENT}..."
            }
        }
    }
}
