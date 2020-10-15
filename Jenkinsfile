pipeline {
    agent any
    stages {
    stage('Install') {
        
      steps { bat 'npm install' }
    }
     stage('Unit tests') {
            steps { bat 'npm run-script test' }
        }
    
  }
}
