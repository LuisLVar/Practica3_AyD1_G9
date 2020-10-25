pipeline {
    agent any
    triggers {
        pollSCM('* * * * *')
    }
    stages {
    stage('Install') {
        
      steps {  sh 'npm install' }
    }
     stage('Unit tests') {
            steps { 
                    sh 'npm run ng test'
                    }
        }

    stage('Build') {
            steps { 
                    sh 'npm run ng build'
                    }
        }
    
  }
}
