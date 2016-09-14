module.exports = {
    options: {
        livereload: true
    },
    scripts: {
        files: ["<%= appPath %>/es6/**/*.es6.js"],
        tasks: ["browserify"]
    }
};