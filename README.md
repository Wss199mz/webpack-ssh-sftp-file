
# webpack-ssh2-sftp-file
webpack-ssh-sftp-file2 plugin upload file by ssh2-sftp-clien functions during bundling
## Installation
The plugin is available via npm:

```js
$ npm i webpack-ssh2-sftp-file
```

## Examples

You can see an example at demo/webpack.config.js.

```js
var webpackSsh2SftpFile = require('../lib/webpack-ssh2-sftp-file');
module.exports = {
 plugins: [
    // Other plugins.
    // WebpackClearConsole plugin removes all statements beginning with console.
    new webpackSsh2SftpFile(
      {
        server: {
          host: '', // 服务器 IP
          port: '', // 22
          username: '',
          password: ''
        },
        localPath: '',
        romotePath: ''
    );
  ]
}
```
