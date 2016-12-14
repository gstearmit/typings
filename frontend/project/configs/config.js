var gulp = require('gulp');
var webserver = require('gulp-webserver');
var proxy = require('http-proxy-middleware');

gulp.task('webserver', function() {
    var apiProxy = proxy('/api', {
        target: 'http://www.example.org',
        changeOrigin: true   // for vhosted sites
    });

    gulp.src('app')
        .pipe(webserver({
            livereload: true,
            directoryListing: true,
            open: true,
            middleware: [apiProxy]
        }));
});

gulp.task('default', ['webserver']);