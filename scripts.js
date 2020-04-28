// $(".card").click(function(){
//   var id = parseInt($(this).attr('id')[1]);
//   showCard(id);
// });
let cardTotal = 8
let cardNum = 0
let firstClick = true

$("#nav-left").click(prevCard);
$("#nav-right").click(nextCard);
$("#scene").click(function() {
  if (firstClick) {
    firstClick = false;
    $(".card").addClass("stack");
    // nextCard();
    setTimeout(function() {
      $('#card-section-nav').removeClass('wide');
      $('#card-section-controls').css("visibility", "visible");
      $('#card-section-quotes').show();
      nextCard();
    }, 1000);
  } else {
    nextCard();
  }
  
});

function nextCard() {
  cardNum += 1;
  if (cardNum > cardTotal) { cardNum = 0 }
  if (cardNum == 0) {
    showCard(1, true);
    return;
  }
  showCard(cardNum);
}
function prevCard() {
  cardNum -= 1;
  if (cardNum < 0) { cardNum = cardTotal }
  if (cardNum == 0) {
    showCard(1, true);
    return;
  }
  showCard(cardNum);
}

$(document).ready(function() {
  $('.card-quotes').hide();
  // $('#quote1').fadeIn();
  // $('#c1').toggleClass('is-flipped');
  // $(".card").removeClass('is-flipped');
});



function showCard(id, allFaceDown=false) {
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
  if (!allFaceDown) {
    setTimeout(function() {$("#c" + id).toggleClass('is-flipped');}, 50);
  }
}

// function allFaceDown(oldTopCardId) {
//   $(".card").removeClass('is-flipped');
//   $('.card-quotes').hide();
//   var new_top = $('#c1')[0];
//   var old_top = $('#top-card').children()[0];
//   var top_card = $('#top-card')[0];
//   $('#c' + id).remove();
//   $('#scene').append(old_top);
//   $('#top-card').children().remove();
//   $('#top-card').append(new_top);
//   $('#top-card').remove();
//   $('#scene').append(top_card);
//   setTimeout(function() {$("#c" + id).toggleClass('is-flipped');}, 50);
  
// }

//disable links for testing only
$(".card-quotes a").on("click", function(event){
  event.preventDefault();
});
