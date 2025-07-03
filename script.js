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
        for(let i = 0; i < this.cards.length; i++) {
            let random_i = Math.floor(Math.random() * i);
            let temp = this.cards[i];
            this.cards[i] = this.cards[random_i];
            this.cards[random_i] = temp;
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