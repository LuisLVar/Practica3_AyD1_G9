pipeline {
    agent any
    triggers {
        pollSCM('* * * * *')
    }
    stages {
    stage('Install') {
        
      steps {  sh '''
                  cd Cliente/GiftcardApp
                  npm install
                ''' }
    }
     stage('Unit tests') {
            steps { 
                   sh '''
                  cd Cliente/GiftcardApp
                    npm run ng test'
                    '''
                    }
        }

    stage('Build') {
            steps { 
                    sh '''
                  cd Cliente/GiftcardApp
                    npm run ng build'
                    '''
                    }
        }
    
  }
}
