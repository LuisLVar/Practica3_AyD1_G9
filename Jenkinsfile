pipeline {
    agent {
                label 'windows'
            }
    stages {
    stage('Install') {
        
      steps { sh 'npm install' }
    }

        stage('Unit tests') {
            steps { sh 'npm run-script test' }
        }

    stage('Build') {
      steps { sh 'npm run-script build' }
    }
  }
}
