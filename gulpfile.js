var gulp        = require('gulp');
var browserSync = require('browser-sync');
// Static server
gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: "./"
        }
    });
});
// or...
gulp.task('browser-sync', function() {
    browserSync({
        proxy: "127.0.0.1"
    });
});