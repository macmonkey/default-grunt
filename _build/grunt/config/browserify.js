module.exports = {
    dist: {
        options: {
            browserifyOptions: {
                //debug: true
                extensions: ['es6.js']
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
            "./../app/js/index.js": ["./../app/**/index.es6.js"]
        }
    }
};