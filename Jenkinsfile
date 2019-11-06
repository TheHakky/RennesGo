pipeline { 
    agent any  
    tools { 
        maven 'maven' 
    }
    stages { 
        stage ('Git') {
            steps { git branch: 'back-end', url: 'https://github.com/TheHakky/RennesGo/tree/back-end/back-end'}
        }
        stage ('Build') {
            steps { sh 'mvn clean compile' }
        }
    }
}
