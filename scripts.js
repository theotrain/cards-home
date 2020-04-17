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
  $('.card-quotes').hide();
  $('#quote' + id).fadeIn();
  // i need to remove the card section from #scene
  // i need to remove the card section from #top-card
  // and reinsert it at the end of #scene
  var new_top = $('#c' + id)[0];
  var old_top = $('#top-card').children()[0];
  var top_card = $('#top-card')[0];
  $('#c' + id).remove();
  $('#scene').append(old_top);
  $('#top-card').children().remove();
  $('#top-card').append(new_top);
  $('#top-card').remove();
  $('#scene').append(top_card);
  setTimeout(function() {$("#c" + id).toggleClass('is-flipped');}, 10);
}

//disable links for testing only
$(".card-quotes a").on("click", function(event){
  event.preventDefault();
});
