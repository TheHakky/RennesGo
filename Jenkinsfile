pipeline { 
    environment {
        registry = "thehakky/back-end"
        registryCredential = 'dockerhub'
        dockerImage = ''
    }
    agent any /*{ dockerfile true }*/  
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
            steps { /*echo 'TODO install step'*/ sh 'mvn -f back-end/pom.xml install' }   
        }
        stage ('Docker Build') {
            steps { 
                script { /*'docker build .'*/ 
                    //dockerImage = docker.build registry + ":$BUILD_NUMBER"
                    if("${docker images -q back-end-image}" == "") {
                        docker rmi -f "${docker images -q back-end-image}"
                    } else {
                        'docker build . -t back-end-image'
                    }
                }
            }
        }
        /*stage ('Deploy Image') {
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
