function createDeck(){
    let suits = ["h", "d", "c", "s"];
    let ranks = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
    const deck = ["w", "w"]; //Create the deck with Jokers

    for(const suit of suits){
        for(const rank of ranks){
            deck.push(suit + rank);
        }
    }

    return deck;
}

console.log(createDeck());