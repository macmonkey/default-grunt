'use strict';
module.exports = function (grunt) {

    var path = require('path');

    require('load-grunt-config')(grunt, {
        configPath: path.join(process.cwd(), 'grunt/config'),

        init: true,

        jitGrunt: {
            customTasksDir: 'grunt/tasks',
            staticMappings: {
                projectDefault: 'grunt/tasks/default.js'
            }


        }
    });

    //grunt.registerTask('default', ['watch:scripts']);
    grunt.registerTask('default', ['projectDefault']);
    grunt.registerTask('testStack', ['browserify']);
    grunt.registerTask('document', ['jsdoc']);

    grunt.registerTask('config', function () {
        grunt.log.writeln('test');
        var test = grunt.file.readJSON('project.json');
        grunt.log.writeln(test.projectName);

        grunt.config.merge(test);
        test = grunt.config.process(test);
        grunt.log.writeln(test.buildPath);
        grunt.log.writeln(test.distPath);

    });

};
