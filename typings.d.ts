export = webpackSsh2SftpFile;
interface Options {
  server: any,
  localPath: String,
  romotePath: String
}
declare class webpackSsh2SftpFile {
  constructor(options?: Options);

  apply(compiler: any): void;
}
