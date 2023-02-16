export interface Framework {
    name: 'next' | 'hugo' | 'jekyll' | 'other';
    reactive: boolean;
}
export declare function initStaticTina(ctx: any, next: () => void, options: any): Promise<void>;
export interface AddConfigArgs {
    publicFolder: string;
    baseDir: string;
    usingTypescript: boolean;
    framework: Framework;
    collections?: string;
    token?: string;
    clientId?: string;
}
/**
 * Executes a shell command and return it as a Promise.
 * @param cmd {string}
 * @return {Promise<string>}
 */
export declare function execShellCommand(cmd: any): Promise<string>;
