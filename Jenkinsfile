pipeline {
	environment {
		pm_config = 'yohanlakhani.com'
		ew_id = '4740'
		ew_ver = '1.8'
    	}
	agent {
        	docker {
        	    	image 'akamai/shell'
        	}

    	}
	options {
		skipDefaultCheckout(true)
	}
	stages {
		stage ("Checkout EW"){
			steps {
				checkout scm
			}
		}
		stage ("Package"){
                        steps {
				sh 'echo EWiD: ${ew_id}'
                                sh 'ls -lrt'
				sh 'rm ew-helloworld.tgz'
				sh 'ls -lrt'	
                                sh 'tar -czvf ew-helloworld.tgz *'
                                sh 'ls -lrt'
                        }		
		}
		stage ("Update"){
			steps {
				sh "akamai edgeworkers upload --bundle ew-helloworld.tgz ${ew_id} --section default"
				sh 'rm ew-helloworld.tgz'
			}
		}
        stage ("Staging: Activate"){
            steps {
                sh "akamai edgeworkers --section default activate ${ew_id} STAGING ${ew_ver}"
            }
        }
        stage ("Staging: Test"){
            steps {
				sh "echo ------------------* DONT FORGET! DO YOUR TEST *-------------------"
            }
        }
        stage ("Prod: Activation Submit"){
            steps {
                sh "akamai edgeworkers --section default activate ${ew_id} PRODUCTION ${ew_ver}"
            }
        }
		stage ("Prod: Activation Status"){
            steps {
                sh "chmod 777 status.sh"
				sh "./status.sh"
            }
        }							
	}
}
