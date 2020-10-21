export = webpackSsh2SftpFile;
import { Compiler } from 'webpack';
interface Options {
  server: any,
  localPath: String,
  romotePath: String
}
declare class webpackSsh2SftpFile {
  constructor(options?: Options);

  apply(compiler: Compiler): void;
}
