/**
 * Created by jens.heidl on 30.08.2016.
 */
module.exports = {
    options: {
        sourceMap: true,
        presets: ['../es2015']
    },
    dist: {
        files: [
            {
                expand: true,
                src: ['./../app/**/*.es6'],
                dest: './../app/js',
                ext: '.js'
            }
        ]
    }
};