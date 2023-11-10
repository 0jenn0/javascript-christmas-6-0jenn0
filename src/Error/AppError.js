export default class AppError extends Error {
  static PREFIX = "[ERROR]";

  constructor(message) {
    super(`\n${LottoError.PREFIX} ${message}\n`);
    this.name = this.constructor.name;
  }
}
