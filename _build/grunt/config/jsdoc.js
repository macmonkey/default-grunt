/**
 * Created by jens.heidl on 01.09.2016.
 */
module.exports = {
    dist: {
        src: ['modules/**/*', 'README.md'],
        options: {
            configure: 'jsdocConfiguration.json'
            //destination: 'documentation'
        }
    }
};

