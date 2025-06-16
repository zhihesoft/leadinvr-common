import { compare, hash } from "bcryptjs";
import { createHash, createHmac } from "crypto";

export namespace CryptoUtils {
    /**
     * User bcrytp to hash password
     * @param password
     * @returns hashed password
     */
    export async function bcryptHash(password: string): Promise<string> {
        return await hash(password, 10);
    }

    /**
     * Compare password with hashed password
     * @param password password
     * @param hashedPassword hashed password (store in db)
     * @returns identical return true, otherwise return false
     */
    export async function bcryptCompare(password: string, hashedPassword: string): Promise<boolean> {
        return compare(password, hashedPassword);
    }

    /**
     * Generate md5 hash
     * @param str
     * @returns
     */
    export function md5(str: string): string {
        return createHash("md5").update(str).digest("hex");
    }

    /**
     * Generate sha256 hash
     * @param str
     * @param secret
     * @returns
     */
    export function hmacSHA256(str: string, secret: string): string {
        return createHmac("sha256", secret).update(str).digest("base64");
    }
}
