function sumOfOther(arr) {
    // if (!Array.isArray(arr)) { throw new TypeError };
    // if (arr.length === 0) { return arr };
    const sum = arr.reduce((acc, x) => acc + x, 0);
    return arr.map(x => sum - x);
}