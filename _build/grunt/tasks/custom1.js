'use strict';
module.exports = function (grunt) {
    grunt.registerTask('custom1', 'custom task 1', function () {
        grunt.log.ok('custom1!');
    });

    grunt.registerTask('custom2', 'custom task 1', function () {
        grunt.log.ok('custom2!');
    });
};

