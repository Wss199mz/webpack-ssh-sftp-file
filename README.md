
# webpack-ssh-sftp-file
webpack-ssh-sftp-file plugin upload file by ssh2-sftp-clien functions during bundling
## Installation
The plugin is available via npm:

```js
$ npm i webpack-ssh-sftp-file
```

## Examples

You can see an example at demo/webpack.config.js.

if you dont want to delete a console statement,you can add a comment called  "NotClearConsole" as in the following example
```js
var webpackSshSftpFile = require('../lib/webpack-ssh-sftp-file');
module.exports = {
 plugins: [
    // Other plugins.
    // WebpackClearConsole plugin removes all statements beginning with console.
    new webpackSshSftpFile(
      {
        server: {
          host: '10.9.56.159', // 服务器 IP
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
