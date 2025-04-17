/**
 * Gets the version and name of a package from its package.json file.
 * @param packageFilePath Path to the package.json file
 * @returns
 */
export async function getPackageVersion(packageFilePath: string): Promise<{ version: string; name: string }> {
    const packageInfo = (await import(packageFilePath)) as {
        version: string;
        name: string;
    };
    return packageInfo;
}
