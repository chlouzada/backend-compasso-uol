export class ApiError {
  public readonly message: string;

  public readonly statusCode: number;

  constructor(message: string, statusCode = 500) {
    this.message = message;
    this.statusCode = statusCode;
  }

  static badRequest(msg: string) {
    return new ApiError(msg, 400);
  }
}
