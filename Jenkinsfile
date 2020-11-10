pipeline {
	agent any
	stages {
		stage ("One"){
			steps {
				sh 'pwd'
			}
		}
		stage ("Two"){
			steps {
				sh 'ls -lrt'
				sh 'tar --disable-copyfile -czvf ew-helloworld.tgz *'
				sh 'ls -lrt'
			}
		}
	}
}