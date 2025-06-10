import { CommonError } from "./common.error";

/**
 * Callback type for the Failed class.
 * It can return a string message or an Error object.
 */
export type FailedCallback = () => string | Error;

/**
 * The Failed class provides methods to handle failure conditions in a structured way.
 * It allows you to throw errors based on conditions and execute callbacks or return messages.
 */
export class Failed {
    /**
     * Throws an error if the condition is true.
     * @param condition The condition to check.
     * @param callback The callback to execute if the condition is true, or a string message.
     */
    static on(condition: unknown, callback: FailedCallback | string) {
        if (!condition) {
            return;
        }

        let resp: string | Error;
        if (typeof callback === "string") {
            resp = callback;
        } else {
            resp = callback();
        }

        if (typeof resp === "string") {
            throw CommonError.of(-1, resp);
        } else {
            throw resp;
        }
    }

    /**
     * Asserts that the condition is true, otherwise throws an error with the provided callback or message.
     * @param condition The condition to check.
     * @param callback The callback to execute if the condition is false, or a string message.
     */
    static onFalsy(condition: unknown, callback: FailedCallback | string): asserts condition {
        Failed.on(!condition, callback);
    }

    /**
     * Throws an error with the provided code and message.
     * If the code is a number, it creates a CommonError with that code.
     * If the code is a string, it creates a CommonError with code -1 and the string as the message.
     * If the code is an Error object, it throws that error directly.
     * @param code The error code or message.
     * @param message Optional additional message.
     */
    static fire(code: number | string | Error, message?: string): never {
        if (typeof code === "number") {
            Failed.on(true, () => CommonError.of(code, message));
        } else if (typeof code === "string") {
            Failed.on(true, () => CommonError.of(-1, code));
        } else {
            Failed.on(true, () => code);
        }
        throw new Error("Unreachable code");
    }
}
