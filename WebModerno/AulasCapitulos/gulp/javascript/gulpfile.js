const gulp = require('gulp');
const { series } = require('gulp');
const concat = require('gulp-concat');
const uglify = require ('gulp-uglify');
const babel =  require ('gulp-babel');

function padrao(cb) {
    return gulp.src('src/**/*.js')
        .pipe(babel({
            comments: false,
            presets: ["env"], // -> versão mais nova do javascript.a1
        }))
        .pipe(uglify())
        .on('error', error => console.log(error))
        .pipe(concat('codigo.min.js'))
        .pipe(gulp.dest('build'));

    // return cb();
}

function fim(cb) {
    console.log('Fim ');
    return cb();
}

// export default series(padrao);
exports.default = series(padrao, fim);