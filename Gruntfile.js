'use strict';
module.exports = function (grunt) {

    //require('jit-grunt')(grunt, {})({
    //    customTasksDir: 'grunt/tasks'
    //});
    var path = require('path');

    require('load-grunt-config')(grunt, {
        configPath: path.join(process.cwd(), 'grunt/config'),

        init: true,

        jitGrunt: {
            customTasksDir: 'grunt/tasks'
            //,
            //staticMappings: {
            //    // here you can specify static mappings, for example:
            //    watch: 'grunt-contrib-watch'
            //}
        }
    });

    //grunt.initConfig({
    //
    //watch: {
    //    sass: {
    //        files: [
    //            'sass/**/*.scss'
    //        ]
    //    }
    //}

    //});

    grunt.registerTask('default', ['custom1', 'custom2', 'timmy', 'watch:sass']);
};
