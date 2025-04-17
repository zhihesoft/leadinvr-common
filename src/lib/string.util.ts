/**
 * Replace all occurrences of a string in another string with a new string.
 * This function uses the String.prototype.replaceAll method to replace all occurrences of a substring with a new string.
 * @param value
 * @param pairs
 * @returns
 */
export function replaceString(value: string, ...pairs: string[][]): string {
    let ret = value;
    for (const pair of pairs) {
        ret = ret.replaceAll(pair[0], pair[1]);
    }
    return ret;
}

/**
 * Split a string by multiple delimiters
 * @param value
 * @param splitter
 * @returns
 */
export function splitString(value: string, ...splitter: string[]): string[] {
    if (!value || value.length <= 0) {
        return [];
    }

    const realSplitter = `^|^|^|^`;
    const temp = replaceString(value, ...splitter.map(s => [s, realSplitter]));
    const ret = temp.split(realSplitter);
    return ret.map(s => s.trim());
}

/**
 * Unescape HTML entities in a string
 * This function replaces HTML entities with their corresponding characters.
 * @param htmlEntity String to unescape
 * @returns Unescaped string
 */
export function unescapeHTML(htmlEntity: string): string {
    return htmlEntity
        .replace(/&amp;/g, "&")
        .replace(/&lt;/g, "<")
        .replace(/&gt;/g, ">")
        .replace(/&#39;/g, "'")
        .replace(/&#xa;/g, "\n")
        .replace(/&quot;/g, '"');
}
