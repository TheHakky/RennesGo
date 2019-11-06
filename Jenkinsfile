pipeline { 
    agent any  
    tools { 
        maven 'maven' 
    }
    stages { 
        stage ('SCM Checkout') {
            git 'https://github.com/TheHakky/RennesGo'
        }
        stage ('Build') {
            sh 'mvn clean install'
        }
    }
}
