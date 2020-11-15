pipeline {
	environment {
		pm_config = 'yohanlakhani.com'
		ew_id = '4740'
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
		stage ("Checkout"){
			steps {
				checkout scm
			}
		}
		stage ("Pack EW"){
                        steps {
				sh 'EWID: ${edgerc}'
                                sh 'ls -lrt'
                                sh 'tar -czvf ew-helloworld.tgz *'
                                sh 'ls -lrt'
                        }		
		}
		stage ("Update EW"){
			steps {
				sh "akamai edgeworkers list-groups --section default"
			}
		}
	}
}
