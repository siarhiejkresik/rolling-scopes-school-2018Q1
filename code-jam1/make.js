function make(...acc) {
    function inner(...args) {
        if (args.length === 1 && typeof args[0] === 'function') {
            return acc.reduce(args[0]);
        } else {
            return make(...acc.concat(args))
        }
    }
    return inner;
}