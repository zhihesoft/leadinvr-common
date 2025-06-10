# leadinvr-common

Common Library for nestjs

<p align="center">
  <a href="https://www.npmjs.com/package/@leadinvr/common">
    <img src="https://img.shields.io/npm/v/@leadinvr/common.svg?style=for-the-badge" alt="npm version" />
  </a>
  <a href="https://www.npmjs.com/package/@leadinvr/common">
    <img src="https://img.shields.io/npm/dt/@leadinvr/common.svg?style=for-the-badge" alt="npm total downloads" />
  </a>
  <a href="https://www.npmjs.com/package/@leadinvr/common">
    <img src="https://img.shields.io/npm/dm/@leadinvr/common.svg?style=for-the-badge" alt="npm monthly downloads" />
  </a>
  <a href="https://www.npmjs.com/package/@leadinvr/common">
    <img src="https://img.shields.io/npm/l/@leadinvr/common.svg?style=for-the-badge" alt="npm license" />
  </a>
</p>

# Install

```bash
npm i @leadinvr/common
```

# API

## Utils

```ts
/**
 * Bypass TypeScript error for unused parameters
 * @param parameters
 */
export declare function forgot(...parameters: unknown[]): void;
/**
 * Wait for seconds
 * @param seconds
 * @returns
 */
export declare function waitForSeconds(seconds: number): Promise<void>;
/**
 * Normalize a number to be within a specified range. [min, max]
 * If the number is less than the minimum, it will return the minimum.
 * If the number is greater than the maximum, it will return the maximum.
 * If the number is within the range, it will return the number itself.
 * @param value
 * @param min
 * @param max
 * @returns Normalized number
 */
export declare function normalizeNumber(value: number, min: number, max: number): number;
```

## Failed helper

```ts
/**
 * Callback type for the Failed class.
 * It can return a string message or an Error object.
 */
export type FailedCallback = () => string | Error;
/**
 * The Failed class provides methods to handle failure conditions in a structured way.
 * It allows you to throw errors based on conditions and execute callbacks or return messages.
 */
export declare class Failed {
    /**
     * Throws an error if the condition is true.
     * @param condition The condition to check.
     * @param callback The callback to execute if the condition is true, or a string message.
     */
    static on(condition: unknown, callback: FailedCallback | string): void;
    /**
     * Asserts that the condition is true, otherwise throws an error with the provided callback or message.
     * @param condition The condition to check.
     * @param callback The callback to execute if the condition is false, or a string message.
     */
    static onFalsy(condition: unknown, callback: FailedCallback | string): asserts condition;
    /**
     * Throws an error with the provided code and message.
     * If the code is a number, it creates a CommonError with that code.
     * If the code is a string, it creates a CommonError with code -1 and the string as the message.
     * If the code is an Error object, it throws that error directly.
     * @param code The error code or message.
     * @param message Optional additional message.
     */
    static fire(code: number | string | Error, message?: string): never;
}
```

## String Service

```ts
export declare class StringService {
    /**
     * Replace all occurrences of a string in another string with a new string.
     * This function uses the String.prototype.replaceAll method to replace all occurrences of a substring with a new string.
     * @param value
     * @param pairs
     * @returns
     */
    replace(value: string, ...pairs: string[][]): string;
    /**
     * Split a string by multiple delimiters
     * This function replaces all occurrences of the specified delimiters with a unique string and then splits the string by that unique string.
     * @param value
     * @param splitter
     * @returns
     */
    split(value: string, ...splitter: string[]): string[];
    /**
     * Unescape HTML entities in a string
     * This function replaces HTML entities with their corresponding characters.
     * @param htmlEntity String to unescape
     * @returns Unescaped string
     */
    unescapeHTML(htmlEntity: string): string;
    /**
     * Buffer to base64 encode
     * @param buffer Buffer to encode
     * @returns
     */
    base64Encode(buffer: Buffer): string;
    /**
     * Base64 decode to buffer
     * @param str Base64 string to decode
     * @returns Buffer
     */
    base64Decode(str: string): Buffer;
    /**
     * Generate a random string of given length
     * @param length Length of the string to generate
     * @returns Random string
     */
    random(length: number): string;
}
```

## Crypto Service

```ts
export declare class CryptoService {
    /**
     * User bcrytp to hash password
     * @param password
     * @returns hashed password
     */
    bcryptHash(password: string): Promise<string>;
    /**
     * Compare password with hashed password
     * @param password password
     * @param hashedPassword hashed password (store in db)
     * @returns identical return true, otherwise return false
     */
    bcryptCompare(password: string, hashedPassword: string): Promise<boolean>;
    /**
     * Generate md5 hash
     * @param str
     * @returns
     */
    md5(str: string): string;
    /**
     * Generate sha256 hash
     * @param str
     * @param secret
     * @returns
     */
    hmacSHA256(str: string, secret: string): string;
}
```

## Get package info from package.json

```ts
/**
 * Gets the version and name of a package from its package.json file.
 * @param packageFilePath Path to the package.json file
 * @returns
 */
async function getPackageVersion(packageFilePath: string): Promise<{ version: string; name: string }>;
```

## Filename encoder for multer

```ts
import { ArgumentMetadata, PipeTransform } from "@nestjs/common";
/**
 * This is only a patch for busboy encoding issue.
 * It will convert the file name from latin1 to utf8.
 * If busboy is fixed, this pipe can be removed.
 * @see https://github.com/expressjs/multer/issues/1104
 */
export declare class FileNameEncodePipe implements PipeTransform {
    transform(
        value: Express.Multer.File | Express.Multer.File[],
        metadata: ArgumentMetadata,
    ): Express.Multer.File | Express.Multer.File[];
}
```

## Common Error

```ts
/**
 * Common error class for handling errors in the application.
 * It extends the built-in Error class and includes an error code.
 */
export declare class CommonError extends Error {
    readonly code: number;
    constructor(code: number, message?: string);
    static of(code: number, message?: string): CommonError;
}
```
