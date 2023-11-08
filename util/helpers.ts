export function must<T = any>(func: CallableFunction): T {
    try {
        return func();
    } catch(e) {
        console.log('error', e);
        throw e;
    }
}

export function prettyFileName(key: string): string {
    return key.split('/').pop()?.split(".").shift() ?? "INVALID KEY";
}

export type Maybe<T> = T | null | undefined;
