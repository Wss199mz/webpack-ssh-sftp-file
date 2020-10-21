const Client = require('ssh2-sftp-client');

class webpackSsh2SftpFile {
	constructor ({ server, localPath, romotePath }) {
		this.server = server;
		this.localPath = localPath;
		this.romotePath = romotePath;
		this.client = new Client();
	}

	apply (compiler) {
		compiler.plugin("done", (compilation, callback) => {
			this.connect().then(() => {
				return this.deleteDir();
			}).then(() => {
				return this.putFile();
			}).then(() => {
				callback && callback();
			});
		});
	}

	connect () {
		return this.client.connect({
			...this.server
		});
	}

	async begin () {
		await this.deleteDir();
		return this.putFile();
	}

	putFile () {
		return new Promise((resolve, reject) => {
			this.client.uploadDir(this.localPath, this.romotePath).then((data) => {
				this.client.end();
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
