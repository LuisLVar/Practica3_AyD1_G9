pipeline {
    agent any
    stages {
    stage('Install') {
        
      steps {  bat """
                         c:
                         cd \"C:\\Users\\gabyz\\OneDrive\\Documents\\GitHub\\Practica3_AyD1_G9\\Cliente\\GiftcardApp"
                         npm install
                         """ }
    }
     stage('Unit tests') {
            steps { 
                    bat """
                         c:
                         cd \"C:\\Users\\gabyz\\OneDrive\\Documents\\GitHub\\Practica3_AyD1_G9\\Cliente\\GiftcardApp"
                         npm run ng test
                         """
                    }
        }
    
  }
}
