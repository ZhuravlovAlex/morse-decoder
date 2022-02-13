const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function updateMorseTable (table) {
    const result = {};
    for (const key in table) {
        let newKey = '';
        key.split('').map(char => {
            newKey += char === '-' ? '11' : '10';
        });

        result[newKey] = table[key];
    };

    return result;
};

function decode(expr) {
    const table = updateMorseTable(MORSE_TABLE);
    
    let result = '';
    for (let i = 0; i <= expr.length / 10; i += 1) {
        
        let symbol = expr.substring((10 * i), 10 * (i + 1));

        let index = symbol.indexOf("1");
        if (index === - 1) {
            result += " ";
            continue;
        }
                
        result += table[symbol.substring(index)];
    }
    
    return result.trim();
}

module.exports = {
    decode
}