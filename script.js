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

function shuffleDeck(deck){
    for(let i = 0; i < deck.length; i++){
        let random_i = Math.floor(Math.random() * i);
        let temp = deck[i];
        deck[i] = deck[random_i];
        deck[random_i] = temp;
    }

    return deck;
}

let deck = createDeck();
shuffleDeck(deck);
console.log(deck);