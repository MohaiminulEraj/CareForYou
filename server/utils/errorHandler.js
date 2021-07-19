class ErrorHandler extends Error {
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode;
        Error.captureStackTrace(this, this.constructor) // stack that will help find the location of the error in the code
    }
}

export default ErrorHandler;