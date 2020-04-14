// UI logic/////////////////////////////////////////////////////////////
// user clicks start button this will happen vvvvvvvvvvvvvvvvvvvvvvvvvvv
function assignCards(cardsToAssign){
  var cardsDeck = $("div.word-cards");
  var htmlForCards = "";
  for (var i = 0; i<cardsToAssign.cards.length; i++){
    $(".word-cards").append(cardsToAssign.cards[i]);
  }
  cardsDeck.append(htmlForCards);
}
