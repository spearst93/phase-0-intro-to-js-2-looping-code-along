function countDown(number) {
    for (let i = number; i >= 0; i--) {
        console.log(i);
    }
}

countDown(10);
function writeCards(names, eventName) {
    const cards = [];

    for (let i = 0; i < names.length; i++) {
        const message = `Thank you, ${names[i]}, for the wonderful ${eventName} gift!`;
        cards.push(message);
    }

    return cards;
}
