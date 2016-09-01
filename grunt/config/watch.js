module.exports = {
    options: {
        livereload: true
    },
    scripts: {
        files: ["./modules/**/*.es6"],
        tasks: ["browserify"]
    }
};