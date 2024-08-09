const numberToArrow = {
    '1': '↙️',
    '2': '⬇️',
    '3': '↘️',
    '4': '⬅️',
    '6': '➡️',
    '7': '↖️',
    '8': '⬆️',
    '9': '↗️'
};

document.getElementById('numberInput').addEventListener('input', function() {
    console.log('Input event triggered');
    const input = this.value;
    let output = '';

    for (let char of input) {
        if (char === '5') continue;
        output += numberToArrow[char] || char;
    }

    document.getElementById('output').innerText = output;
});
