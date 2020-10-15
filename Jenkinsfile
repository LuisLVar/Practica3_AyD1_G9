pipeline {
    agent any
    stages {
    stage('Install') {
        
      steps { bat 'npm install' }
    }
     stage('Unit tests') {
            steps { 
                    bat """
                         c:
                         cd \"C:\\Users\\gabyz\\OneDrive\\Documents\\GitHub\\Practica3_AyD1_G9\"
                         npm run-script test
                         """
                    }
        }
    
  }
}
