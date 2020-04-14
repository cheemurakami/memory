import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';
import { Card } from './Card';

$(document).ready(function() {
  $("#start").click(function(){
    var cards = new Card();
    var deck = cards.wordDeck();
    console.log(deck);
  });
});