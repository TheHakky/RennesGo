pipeline { 
    agent { /*dockerfile true*/ }  
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
        stage ('Test') {
            steps { sh 'mvn -f back-end/pom.xml test' }   
        }
        stage ('Package') {
            steps { sh 'mvn -f back-end/pom.xml package' }   
        }
        stage ('Install') {
            steps { sh 'mvn -f back-end/pom.xml install' }   
        }
        stage ('Build') {
            steps { echo 'TODO build step' }
        }
    }
}
