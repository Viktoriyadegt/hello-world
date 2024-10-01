function defineSuit(card) {

    const cards = {
        '♣': 'clubs',
        '♦': 'diamonds',
        '♥': 'hearts',
        '♠': 'spades'
    }
    return cards[card.split('')[card.length-1]]
}