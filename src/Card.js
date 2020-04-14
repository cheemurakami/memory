export function Card(word, number) {
  this.word = word;
  this.number = number;
  this.cards = [];
}


//for this time we need 4 divs or some boxes for these cards////////////
Card.prototype.wordDeck = function (){
  var wordCards = ["apple", "apple", "orange", "orange"]; 
  this.cards = shuffle(wordCards);
 return this.cards; // wordCards array is random now
}


function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}