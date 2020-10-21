const Client = require('./src/index');

class webpackSsh2SftpFile {
	constructor ({ server, localPath, romotePath }) {
		this.server = server;
		this.localPath = localPath;
		this.romotePath = romotePath;
		this.client = new Client();
	}

	apply (compiler) {
		compiler.plugin("done", (compilation, callback) => {
			this.deleteDir().then(() => {
				return this.putFile();
			}).then(() => {
				callback && callback();
			});
		});
	}

	async begin () {
		await this.deleteDir();
		return this.putFile();
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

	deleteDir () {
		return new Promise((resolve, reject) => {
			this.client.rmdir(this.romotePath, true).then(() => {
				resolve();
			})
				.catch(err => {
					console.error(err.message);
					resolve();
				});
		});
	}
}

module.exports = webpackSsh2SftpFile;
