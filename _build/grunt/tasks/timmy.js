/**
 * Created by jens.heidl on 23.08.2016.
 */
module.exports = function (grunt) {
    grunt.registerTask('teststack', 'test!', ['browserify']);
};