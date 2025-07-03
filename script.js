class Deck {
    constructor(){
        const suits = ["h", "d", "c", "s"]; //Hearts, Diamonds, Clubs, Spades
        const ranks = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
        this.cards = ["w", "w"]; //Initialize the deck with Jokers

        for(const suit of suits){
            for(const rank of ranks){
                this.cards.push(suit + rank);
            }
        }

        console.log("deck created");
    }

    shuffle(){
        for(let i = 0; i < this.cards.length; i++){
            let random_i = Math.floor(Math.random() * i);
            let temp = this.cards[i];
            this.cards[i] = this.cards[random_i];
            this.cards[random_i] = temp;
        }
        console.log("deck shuffled");
    }


}

let deck = new Deck();
deck.shuffle();
console.log(deck);