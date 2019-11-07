pipeline { 
    agent any  
    tools { 
        maven 'maven' 
    }
    stages { 
        stage ('Git') {
            steps { git branch: 'back-end', url: 'https://github.com/TheHakky/RennesGo'}
        }
        stage ('Compile') {
            steps { sh 'mvn -f back-end/pom.xml clean compile' }   
        }
        stage ('Build') {
            steps { echo 'TODO build step' }
        }
    }
}
