/**
 * Created by jens.heidl on 01.09.2016.
 */
module.exports = {
    server: {
        options: {
            keepalive: false,
            protocol: 'http',
            hostname: 'localhost',
            base: '<%= appPath %>',
            port: '8080',
            livereload: '35729'
        }
    }
};