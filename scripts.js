$(".card").click(function(){
  var id = parseInt($(this).attr('id')[1]);
  showCard(id);
});

$("#nav-left").click(function(){
  cardNum -= 1;
  if (cardNum < 1) { cardNum = cardTotal }
  showCard(cardNum);
});
$("#nav-right").click(function(){
  cardNum += 1;
  if (cardNum > cardTotal) { cardNum = 1 }
  showCard(cardNum);
});

$(document).ready(function() {
  $('.card-quotes').hide();
  $('#quote1').fadeIn();
  $('#c1').toggleClass('is-flipped');
  // $(".card").removeClass('is-flipped');
});

let cardTotal = 5
let cardNum = 1

function showCard(id) {
  $(".card").removeClass('is-flipped');
  $("#c" + id).toggleClass('is-flipped');
  $('.card-quotes').hide();
  $('#quote' + id).fadeIn();
}

//disable links for testing only
$(".card-quotes a").on("click", function(event){
  event.preventDefault();
});
