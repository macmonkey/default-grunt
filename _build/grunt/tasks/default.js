/**
 * Created by jens.heidl on 23.08.2016.
 */
module.exports = function (grunt) {
    grunt.registerTask('projectDefault', ['config', 'reload', 'connect', 'watch']);
};