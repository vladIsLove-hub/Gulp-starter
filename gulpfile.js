'use strict';

let gulp            =   require('gulp'),
    sass            =   require('gulp-sass'),
    rename          =   require ('gulp-rename'),
    browserSync     =   require('browser-sync'),
    autoprefixer    =   require('gulp-autoprefixer'),
    uglify          =   require('gulp-uglify'),
    concat          =   require('gulp-concat');


// SASS options: 

gulp.task('sass', () => {
    return gulp.src('app/scss/**/*.scss')
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(rename({suffix: '.min'}))
    .pipe(autoprefixer(['last 15 versions']))
    .pipe(gulp.dest('src/css'))
    .pipe(browserSync.stream())
})

//HTML control:

gulp.task('html', () => {
    return gulp.src('src/*.html')
    .pipe(browserSync.stream())
})

//JS control:

gulp.task('script', () => {
    return gulp.src('app/js/*.js')
    .pipe(gulp.dest('src/js'))
    .pipe(browserSync.stream())
})

//Browser-sync options:

gulp.task('browser-sync', () => {
    browserSync.init({
        server: {
            baseDir: "src"
        }
    });
});

//Task for wathing: 

gulp.task('watch', () => {
    gulp.watch('app/scss/**/*.scss', gulp.parallel('sass'))
    gulp.watch('src/*.html', gulp.parallel('html'))
    gulp.watch('app/js/*.js', gulp.parallel('script'))
})

//Default run:

gulp.task('default', gulp.parallel('html', 'sass', 'script', 'browser-sync', 'watch'))






























// let gulp = require('gulp'),
//     sass = require('gulp-sass'),
//     rename = require('gulp-rename'),
//     browserSync = require('browser-sync');

// gulp.task('sass', () => {
//     return gulp.src('app/scss/**/*.scss')
//     .pipe(sass({outputStyle: 'compressed'}))
//     .pipe(rename({suffix: '.min'}))
//     .pipe(gulp.dest('app/css'))
//     .pipe(browserSync.reload({stream: true}))
// })

// gulp.task('html', () => {
//     return gulp.src('app/*.html')
//     .pipe(browserSync.reload({stream: true}))
// })

// gulp.task('browser-sync', () => {
//     browserSync.init({
//         server: {
//             baseDir: "app"
//         }
//     });
// });

// gulp.task('watch', () => {
//     gulp.watch('app/scss/**/*.scss', gulp.parallel('sass'))
//     gulp.watch('app/*.html', gulp.parallel('html'))
// })

// gulp.task('default', gulp.parallel('html','sass','browser-sync', 'watch'))























