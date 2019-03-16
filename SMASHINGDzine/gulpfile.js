var gulp = require('gulp');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();


var vendorjs = [

];

// gulp.task('concat', () => {
//     return gulp.src('scss/*.scss')
//         .pipe(sass())
//         .pipe(gulp.dest('./css'))
// })

gulp.task('sass', () => {
    return gulp.src('scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./css'))
})

gulp.task('vendor', () => {
    return gulp.src(vendorjs)
        .pipe(concat(vendor.js))
        .pipe(gulp.dest('./javascripts'))
})

gulp.task('server', function() {
    browserSync.init({
        server: {
            baseDir: './',
        }
    });
})

gulp.task('watch', function()  {
    gulp.watch('scss/*.scss', gulp.parallel('sass'));
    gulp.watch('index.html').on('change', browserSync.reload);
    gulp.watch('scss/*.scss').on('change', browserSync.reload);
});

gulp.task('default', gulp.parallel('sass', 'server', 'watch'));