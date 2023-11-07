export function must<T = any>(func: CallableFunction): T {
    try {
        return func();
    } catch(e) {
        console.log('error', e);
        throw e;
    }
}
