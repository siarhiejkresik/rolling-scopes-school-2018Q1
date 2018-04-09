function make(...args) {
    let cache = args;
    function inner(...args) {
        if (args.length === 1 && typeof args[0] === 'function') {
            return cache.reduce(args[0]); // initial value?
        } else {
            cache = cache.concat(args);
            return inner;
        }
    }
    return inner;
}