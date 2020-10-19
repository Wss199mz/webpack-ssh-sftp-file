/**
 * Webpack configuration for plugin
 */
var path = require("path");
var webpackSshSftpFile = require('../lib/webpack-ssh-sftp-file');
module.exports = {
    cache: true,
    context: __dirname,
    entry: "./main.js",
    output: {
        path: path.join(__dirname, "build"),
        filename: "[hash].main.js"
    },
    plugins: [
        // Try various defaults and options.
      new webpackSshSftpFile(
        {
            server: {
                host: '', // 服务器 IP
                port: '22',
                username: '',
                password: ''
            },
            localPath: '',
            romotePath: ''
        }
      )
    ]
};
