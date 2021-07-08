class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    // add the rest of the class properties here
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;

  }

  shuffleCards() {
    // ... write your code here
    
      var m = this.cards.length;
      var i;
      var t;
      while (m) {
        i = Math.floor(Math.random() * m--);
        t = this.cards[m];
        this.cards[m] = this.cards[i];
        this.cards[i] = t;
      }
      return this.cards;
  

  }

  checkIfPair(card1, card2) {
    // ... write your code here
      this.pairsClicked += 1;
      if (card1 === card2) {
        this.pairsGuessed+=1;
        return true;
      } else {
        return false;
      }
    
    
  }

  checkIfFinished() {
    // ... write your code here

    if (this.pairsGuessed === this.cards.length / 2) {
      return true;
    }
    return false;
  }
 
}

// The following is required for automated testing. Please, ignore it.
//if (typeof module !== 'undefined') module.exports = MemoryGame;


this.pairsClicked += 1;
card1 === card2 ? true:false 