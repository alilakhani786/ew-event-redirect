pipeline {
	agent any
	options {
		skipDefaultCheckout(true)
	}
	stages {
		stage ("Checkout"){
			steps {
				checkout scm
			}
		}
		stage ("One"){
			steps {
				sh 'pwd'
			}
		}
		stage ("Two"){
			steps {
				sh 'ls -lrt'
				sh 'tar -czvf ew-helloworld.tgz *'
				sh 'ls -lrt'
			}
		}
	}
}