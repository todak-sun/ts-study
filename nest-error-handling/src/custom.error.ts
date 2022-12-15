export class CustomError extends Error {
  constructor(message: string | undefined) {
    super(message);
    this.name = CustomError.name;
  }
  getPayload() {
    return { stack: this.stack, message: this.message, name: this.name };
  }
}
