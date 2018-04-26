/**
 * Create enum from string.
 * 
 *  input: 'aa bb cc', prefix = '.'
 *  
 *  output: {
 *      AA: '.aa',
 *      BB: '.bb',
 *      CC: '.cc'
 * } 
 */
export default function EnumFromString(str, prefix = '') {
    const obj = {};
    const seen_keys = [];
    for (let key of str.split(' ')) {

        // validation
        // check obj properties
        if (key in obj) {
            throw `'${key}' is a not valid value`;
        // check duplicated words in inpur string
        } else if (seen_keys.includes(key)) {
            throw `'${key}' is not unique word in input string`;
        } else {
            seen_keys.push(key);
        }

        obj[key.toUpperCase()] = `${prefix}${key}`;
    }
    return obj;
}

/**
 * Randomize array element order in-place.
 * Using Durstenfeld shuffle algorithm.
 */
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

export {
    EnumFromString,
    shuffleArray
};

// why do i need export default??