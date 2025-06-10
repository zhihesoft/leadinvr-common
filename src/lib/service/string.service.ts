import { Injectable } from "@nestjs/common";
import * as crypto from "crypto";

@Injectable()
export class StringService {
    /**
     * Replace all occurrences of a string in another string with a new string.
     * This function uses the String.prototype.replaceAll method to replace all occurrences of a substring with a new string.
     * @param value
     * @param pairs
     * @returns
     */
    replace(value: string, ...pairs: string[][]): string {
        let ret = value;
        for (const pair of pairs) {
            ret = ret.replaceAll(pair[0], pair[1]);
        }
        return ret;
    }

    /**
     * Split a string by multiple delimiters
     * This function replaces all occurrences of the specified delimiters with a unique string and then splits the string by that unique string.
     * @param value
     * @param splitter
     * @returns
     */
    split(value: string, ...splitter: string[]): string[] {
        if (!value || value.length <= 0) {
            return [];
        }

        let arr = [value];

        for (const s of splitter) {
            arr = arr.flatMap(v => v.split(s));
        }
        return arr.map(s => s.trim());
    }

    /**
     * Unescape HTML entities in a string
     * This function replaces HTML entities with their corresponding characters.
     * @param htmlEntity String to unescape
     * @returns Unescaped string
     */
    unescapeHTML(htmlEntity: string): string {
        return htmlEntity
            .replace(/&amp;/g, "&")
            .replace(/&lt;/g, "<")
            .replace(/&gt;/g, ">")
            .replace(/&#39;/g, "'")
            .replace(/&#xa;/g, "\n")
            .replace(/&quot;/g, '"');
    }

    /**
     * Buffer to base64 encode
     * @param buffer Buffer to encode
     * @returns
     */
    base64Encode(buffer: Buffer): string {
        return buffer.toString("base64");
    }

    /**
     * Base64 decode to buffer
     * @param str Base64 string to decode
     * @returns Buffer
     */
    base64Decode(str: string): Buffer {
        return Buffer.from(str, "base64");
    }

    /**
     * Generate a random string of given length
     * @param length Length of the string to generate
     * @returns Random string
     */
    random(length: number): string {
        return crypto
            .randomBytes(length / 2)
            .toString("hex")
            .slice(0, length);
    }
}
