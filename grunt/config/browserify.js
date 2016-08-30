module.exports = {
    dist: {
        options: {
            transform: [
                [
                    "babelify",
                    {
                        loose: "all"
                    }
                ]
            ]
        },
        files: {
            "./dist/module.js": ["./script/index.es6"]
        }
    }
};