pipeline { 
    agent any  
    tools { 
        maven 'maven' 
    }
    stages { 
        stage ('SCM Checkout') {
            steps {
                git 'https://github.com/TheHakky/RennesGo'
            }
        }
        stage ('Build') {
            steps {
                sh 'mvn clean install'
            }
        }
    }
}
