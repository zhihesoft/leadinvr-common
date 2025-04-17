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

-   wait for seconds

```ts
/**
 * Wait for seconds
 * @param seconds
 * @returns
 */
export async function waitForSeconds(seconds: number): Promise<void>;
```

-   Bypass compile warning for unused parameters

```ts
/**
 * Bypass TypeScript error for unused parameters
 * @param parameters
 */
export function forgot(...parameters: unknown[]);
```

-   Generate a random length string

```ts
/**
 * Generate a random string of given length
 * @param length Length of the string to generate
 * @returns Random string
 */
export function randomString(length: number): string'
```

-   Normalize number in a spec range

```ts
/**
 * Normalize a number to be within a specified range. [min, max]
 * If the number is less than the minimum, it will return the minimum.
 * If the number is greater than the maximum, it will return the maximum.
 * If the number is within the range, it will return the number itself.
 */
export function normalizeNumber(value: number, min: number, max: number): number;
```

-   Unescape HTML entity

```ts
/**
 * Unescape HTML entities in a string
 * This function replaces HTML entities with their corresponding characters.
 * @param htmlEntity String to unescape
 * @returns Unescaped string
 */
export function unescapeHTML(htmlEntity: string): string;
```

## Failed

-   Fire exception when condition is truely

```ts
Failed.on(condition, `messages ...`);
Failed.on(condition, () => `messages ...`);
Failed.on(condition, () => new Error());
```

-   Fire exception when condition is falsy

```ts
Failed.onFalsy(condition, `messages ...`);
Failed.onFalsy(condition, () => `messages ...`);
Failed.onFalsy(condition, () => new Error());
```

## Crypto

-   bcryptHash: generate hash code via bcrypt

```ts
/**
 * User bcrytp to hash password
 * @param password
 * @returns hashed password
 */
export async function bcryptHash(password: string): Promise<string>;
```

-   bcryptCompare: compare bcrypto hash

```ts
/**
 * Compare password with hashed password
 * @param password password
 * @param hashedPassword hashed password (store in db)
 * @returns identical return true, otherwise return false
 */
export async function bcryptCompare(password: string, hashedPassword: string): Promise<boolean>;
```

-   generate md5 hash

```ts
/**
 * Generate md5 hash
 * @param str
 * @returns
 */
export function md5(str: string): string;
```

-   generate hmacSHA256 hash

```ts
/**
 * Generate sha256 hash
 * @param str
 * @param secret
 * @returns
 */
export function hmacSHA256(str: string, secret: string): string;
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
