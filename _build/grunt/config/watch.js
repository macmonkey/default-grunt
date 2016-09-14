module.exports = {
    options: {
        livereload: true
    },
    scripts: {
        files: ["./modules/**/*.es6.js"],
        tasks: ["browserify"]
    }
};