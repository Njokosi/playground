
function returnColor(status) {
    let color = 'gray-400';
    let text = 'active'

    if (status === 'c') {
        color = 'green-400';
        text = 'complete'
    } else if (status === 'a') {
        color = 'blue-400';
        text = 'active'
    } else if (status === 'p') {
        color = 'red-400';
        text = 'postponed'
    }
    return [color, text];
}

console.log(returnColor('a')[0])