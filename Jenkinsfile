pipeline {
    agent any
    stages {
    stage('Install') {
        
      steps { cmd_exec('npm install') }
    }
    def cmd_exec(command) {
        return bat(returnStdout: true, script: "${command}").trim()
    }
  }
}
