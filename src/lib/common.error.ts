/**
 * Common error class for handling errors in the application.
 * It extends the built-in Error class and includes an error code.
 */
export class CommonError extends Error {
    constructor(public readonly code: number, message?: string) {
        super(message ?? "Failed");
    }

    static of(code: number, message?: string) {
        return new CommonError(code, message);
    }
}
