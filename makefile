install:
	npm install

gulp:
	rm -rf logs
	mkdir logs
	./scripts/run_gulp.sh

run:
	./scripts/run_backend.sh
