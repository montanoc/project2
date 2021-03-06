$(document).ready(function() {
  //json file
  var getData = function() {
    $.ajax({
      type: 'GET',
      url: 'https://raw.githubusercontent.com/montanoc/project2/master/scripts/data.json',
      dataType: 'json',
      success: function(data) {
        $.each(data, function(i, trash) {

          $('#message').append('<div data-current-click-count="0" data-tolerance="' + trash.clickcount + '" class="item ' + trash.item + '">' + trash.item + '<img src="http://www.cmontano.xyz/interaction3/project2/images/' + trash.imagesrc + '.jpg"/></div>');

//          $('#message').append('<div data-current-click-count="0" data-tolerance="' + trash.clickcount + '" class="item ' + trash.item + '">' + trash.item + '<img src="images/' + trash.imagesrc + '.png"/></div>');
            
            

        });
      },
      complete: function() {
        $('.item').each(function(i, v) {
          $(this).fadeIn(300);
        });
        itemInteraction();
      }
    });
  }

  // Grabs all the data from the JSON file
  getData();

  // Initiates the interaction for each item
  var itemInteraction = function() {
    $('.item').click(function() {

      var currentClickCount = parseInt($(this).attr('data-current-click-count'));
      var tolerance = parseInt($(this).attr('data-tolerance'));

      // var year = $(this).data('clickcount');
      //  alert('decomposed');
      $(this).attr('data-current-click-count', currentClickCount + 1);
        
    
        
        
        //opacity lowers on each click
        //$(this).children("img").animate({
     //   opacity:0.7,
//    image shrinks with each click
       // $(this).append();
      $(this).children("img").animate({
       
       left: '1px',
        right: '1px',
        height: '-=3%',
        width: '-=3%' 
       
            
            
      });
//when clicked right amount of times it fades out
      if (currentClickCount == tolerance) {
        $(this).fadeOut();
          
   
        }
    })
    
     //randomize divs on load 
    var cards = $(".item");
    for(var i = 0; i < cards.length; i++){
    var target = Math.floor(Math.random() * cards.length -1) + 1;
    var target2 = Math.floor(Math.random() * cards.length -1) +1;
    cards.eq(target).before(cards.eq(target2));
}
  }

  /*if (clickcount == 5) {
  $(this).append('decomposed');
  } */
                  
//timer
var start = new Date().getTime();
var time = 0;
var timeout = 30000;

function instance() {
    
    //alert(start);

    if (time == timeout) {

        time = 0;

    } else {

        time += 1;

    }
    $('#count').text(time);
    //var diff = (new Date().getTime() - start) - time;
    window.setTimeout(instance, 1000);
}
window.setTimeout(instance, 1);
$('#current').click(function() {
$('#current span').text(time);

});
    
  //splash screen 
$.fn.center = function () {
  this.css("position","absolute");
  this.css("top", Math.max(0, (
    ($(window).height() - $(this).outerHeight()) / 2) + 
     $(window).scrollTop()) + "px"
  );
  this.css("left", Math.max(0, (
    ($(window).width() - $(this).outerWidth()) / 2) + 
     $(window).scrollLeft()) + "px"
  );
  return this;
}

$("#overlay").show();
$("#overlay-content").show().center();

setTimeout(function(){    
  $("#overlay").fadeOut();
}, 600);
    
});
