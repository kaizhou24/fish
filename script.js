class Deck{
    constructor(){
        const ranks = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
        const suits = ["h", "d", "c", "s"]; //Hearts, Diamonds, Clubs, Spades
        this.cards = ["w", "w"]; //Initialize the deck with Jokers

        for(const rank of ranks){
            for(const suit of suits){
                this.cards.push(rank + suit);
            }
        }

        console.log("deck created");
    }

    shuffle(){
        for (let i = this.cards.length - 1; i > 0; i--) { 
            const j = Math.floor(Math.random() * (i + 1));
            [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
        }

        console.log("deck shuffled");
    }

    deal(){
        if(this.cards.length !== 0){
            return this.cards.pop();
        }else{
            console.log("no more cards");
            return undefined;
        }
    }
}

class Player{
    constructor(name){
        this.name = name;
        this.hand = [];
    }

    draw(deck){
        const card = deck.deal();
        if(card){
            this.hand.push(card);
            console.log(`${this.name} drew ${card}`);
        }
    }
}

let deck = new Deck();
deck.shuffle();
const player1 = new Player("alice");
player1.draw(deck);
console.log(player1);