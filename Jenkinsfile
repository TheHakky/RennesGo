pipeline { 
    environment {
        registry = "thehakky/front-end"
        registryCredential = 'dockerhub'
        dockerImage = ''
    }
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
                 sh '''
                    export CHROME_BIN=/usr/bin/chrome
                    cd front-end
                    npm run ng test --watch=false --browsers=MyChrome --code-coverage
                 '''  
            }
        }
        stage ('Lint') {
            steps { sh '''
               cd front-end
               npm run ng lint
            ''' }   
        }
        /*stage ('System Test') { //npm run protractor e2e/protractor.conf.js
            steps { sh '''
                cd front-end
                npm run ng e2e --protractor-config=e2e/protractor.conf.js
                ''' }   
        }*/
        stage ('Build') {
            steps { sh '''
                cd front-end
                npm run ng build
            ''' }   
        }
        stage ('Docker Build') {
            steps { 
                /*script {  
                    dockerImage = docker.build registry + ":$BUILD_NUMBER"
                }*/
                sh '''
                    docker rmi -f "$(docker stop $(docker ps -q --filter ancestor=front-end-image))"
                    docker system prune -f
                    docker build . -t front-end-image
                '''
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
        }*/
        stage ('Docker Run') {
            steps { 
                sh 'docker run --detach front-end-image'
            }
        }
        /*stage('Remove Unused docker image') {
            steps{
              sh "docker rmi $registry:$BUILD_NUMBER" 
            }
        }*/
    }
}
