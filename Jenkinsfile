pipeline { 
    /*environment {
        registry = "thehakky/projet-devops"
        registryCredential = 'dockerhub'
        dockerImage = ''
    }*/
    agent any /*{ dockerfile true }*/  
    /*tools { 
        maven 'maven' 
    }*/
    stages { 
        stage ('Git') {
            steps { git branch: 'workspace', url: 'https://github.com/TheHakky/RennesGo'}
        }
        stage ('Install') {
            steps { sh 'npm -f front-end/package.json install' }   
        }
        stage ('Test') {
            steps { sh 'ng test --code-coverage' }   
        }
        stage ('Lint') {
            steps { sh 'ng lint' }   
        }
        stage ('Build') {
            steps { /*echo 'TODO install step'*/ sh 'ng build' }   
        }
        /*stage ('Docker Build') {
            steps { 
                script {  
                    dockerImage = docker.build registry + ":$BUILD_NUMBER"
                }
            }
        }
        stage ('Deploy Image') {
            steps {
                script {
                    docker.withRegistry('', registryCredential) {
                        dockerImage.push()
                    }
                }
            }
        }
        stage('Remove Unused docker image') {
            steps{
              sh "docker rmi $registry:$BUILD_NUMBER"
            }
        }*/
    }
}
