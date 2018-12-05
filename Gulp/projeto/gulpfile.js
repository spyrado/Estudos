var gulp = require('gulp'),
    imagemin = require('gulp-imagemin');
    clean = require('gulp-clean');

/* Copia tudo da pasta src, e joga dentro de dist */
gulp.task('copy', ['clean'],function(){
    console.log('Copiando src e jogando e dist...');
    return gulp.src('src/**/*')
        .pipe(gulp.dest('dist')); // Caso n tenha dist, ele cria a pasta dist
});

/* Remove a pasta dist */
gulp.task('clean', function(){
    console.log('Removendo diretorio Dist...');
    return gulp.src('dist')
        .pipe(clean());
});

/* Minifica imagens da pasta dist (distribuição) */
gulp.task('build-img', ['copy'],function(){
    console.log('Minificando imagens...');
    gulp.src('dist/img/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/img'));
});