module.exports = {
    options: {
        relative: false,
        ignorePath: './../app/',
        addRootSlash: false
    },
    local_dependencies: {
        files: {
            './../app/index.html': ['./../app/js/**/*.js']
            //'./../app/index.html': ['./../app/js/**/*.js', '**/*.css']
        }
    }
};