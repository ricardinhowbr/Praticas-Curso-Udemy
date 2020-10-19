const gulp = require('gulp');
const { series, parallel } = require('gulp');
// const series = gulp.series;

const antes1 = cb => {
    console.log('tarefa antes 1')
    return cb();
}

const antes2 = cb => {
    console.log('tarefa antes 2')
    return cb();
}

const fim = cb => {
    console.log('tarefa fim')
    return cb();
}

function copiar(callback) {
    console.log('tarefa de copiar');
    return callback();
}

module.exports.default = series(
    parallel(antes1, antes2),
    copiar,
    fim
);