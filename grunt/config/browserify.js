module.exports = {
    dist: {
        options: {
            browserifyOptions: {
                //debug: true
                extensions: ['es6']
            },
            transform: [
                ["babelify",
                    {

                        presets: ['es2015']
                        //,
                        //plugins: ["transform-es2015-typeof-symbol"]
                    }
                ]
            ]
            //,
            //plugins: ["transform-es2015-typeof-symbol"]
        },
        files: {
            "./dist/module.js": ["./modules/index.es6"]
        }
    }
};