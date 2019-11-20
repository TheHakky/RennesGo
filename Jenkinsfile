pipeline { 
    /*environment {
        registry = "thehakky/projet-devops"
        registryCredential = 'dockerhub'
        dockerImage = ''
    }*/
    agent any /*{ dockerfile true }*/  
    tools { 
        nodejs 'nodejs' 
    }
    stages { 
        stage ('Git') {
            steps { git branch: 'workspace', url: 'https://github.com/TheHakky/RennesGo'}
        }
        stage ('Install') {
            steps { sh '''
                cd front-end
                npm install
                npm audit fix
            ''' }   
        }
        stage ('Test') {
            steps {
                /*withEnv(["CHROME_BIN=/usr/bin/google-chrome"]) {*/
                 sh '''
                    cd front-end
                    npm run ng test --watch=false --browsers=MyChrome --code-coverage
                 '''  
                //}
            }
        }
        stage ('Lint') {
            steps { sh '''
               cd front-end
               npm run ng lint
            ''' }   
        }
        stage ('Build') {
            steps { sh '''
                cd front-end
                npm run ng build
            ''' }   
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
