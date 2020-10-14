const Client = require('ssh2-sftp-client');

class webpackSshSftpFile {
	constructor({ server, localPath, romotePath }) {
		this.server = server
		this.localPath = localPath
		this.romotePath = romotePath
	}
	apply (compiler) {
		compiler.plugin("done", (compilation, callback) => {
			this.putFile().then(() => {
				callback()
			});
		});
	}
	putFile () {
		return new Promise((resolve, reject) => {
			const sftp = new Client();
			sftp.connect({
				...this.server
			}).then(() => {
				// 上传文件
				return sftp.uploadDir(this.localPath, this.romotePath);
				// 下载文件
				// return sftp.get(localPath, romotePath);
			}).then((data) => {
				console.log("上传完成");
				sftp.end();
				resolve();
			}).catch((err) => {
				console.log(err, 'catch error');
				resolve();
			});
		});
	}
}

module.exports = webpackSshSftpFile;
