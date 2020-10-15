pipeline {
    agent any
    stages {
    stage('Install') {
        
      steps { bat 'npm install' }
    }
     stage('Unit tests') {
            steps { sh 'npm run-script test' }
        }
    
  }
}
