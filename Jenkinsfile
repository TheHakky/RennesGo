pipeline { 
    agent any  
    tools { 
        maven 'maven' 
    }
    stages { 
        stage ('Git') {
            steps { git branch: 'back-end', url: 'https://github.com/TheHakky/RennesGo'}
        }
        stage ('Build') {
            steps { rtMavenRun (pom: 'pom.xml', goals: 'clean install'}
        }
    }
}
