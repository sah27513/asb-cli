export class MissingConnection extends Error {
  constructor(message) {
    super(message);
    this.message =
      "Missing Connection Information (AZURE_SERVICEBUS_CONNECTION_STRING in `.env`)";
    this.name = this.constructor.name;
    Error.captureStackTrace(this, this.constructor);
  }
}
