export default function rateLimiter(callsPerSecond: number, func: (...args: any[]) => any) {
    let lastFetch = 0;
    let cachedValue: any = null;

    return new Proxy(func, {
        apply(target, thisArg, args) {
            const newTime = new Date().getTime();
            if (newTime - lastFetch > (1000 / callsPerSecond)) {
                cachedValue = target.apply(thisArg, args);
                lastFetch = newTime;
            }

            return cachedValue
        }
    });
}
