var gulp = require('gulp'),
    imagemin = require('gulp-imagemin'),
    clean = require('gulp-clean'),
    concat = require('gulp-concat'),
    htmlReplace = require('gulp-html-replace'),
    uglify = require('gulp-uglify'),
    usemin = require('gulp-usemin'),
    cssmin = require('gulp-cssmin');

/* Exucuta todas as minhas tarefas, copy com dependencia 
E o restante assincronamente, isso é.. vao rodar ao msm tempo, pois 
eles não dependem do outro */
gulp.task('default',['copy'], function(){

    gulp.start('build-img','usemin');
});

/* Copia tudo da pasta src, e joga dentro de dist */
gulp.task('copy', ['clean'],function(){
    console.log('Copiando src e jogando em dist...');
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
gulp.task('build-img',function(){
    console.log('Minificando imagens...');
    gulp.src('dist/img/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/img'));
});

// /* Concatena todos os meus arquivos js e joga pro arquivo js */
// gulp.task('build-js', function(){
//     console.log('Gerando arquivo all.js');
//     gulp.src(['./dist/js/jquery.js','./dist/js/home.js','./dist/js/produto.js'])
//     .pipe(concat('all.js'))
//     .pipe(uglify())
//     .pipe(gulp.dest('dist/js'));
// });

// /* Concatena todos os meus arquivos js e joga pro arquivo js */
// gulp.task('build-html', ['build-js'],function(){
//     console.log('Removendo tags e adicionando uma unica tag all.js');
//     gulp.src('./dist/**/*.html')
//     .pipe(htmlReplace({
//         js: 'js/all.js'
//     }))
//     .pipe(gulp.dest('./dist/'));
    
// });

gulp.task('usemin', function(){
    
    gulp.src('dist/**/*.html')
        .pipe(usemin({
            'js': [uglify],
            'css': [cssmin]
        }))
        .pipe(gulp.dest('dist'));
});