$(document).ready(function() {
  //json file
  var getData = function() {
    $.ajax({
      type: 'GET',
      url: 'https://raw.githubusercontent.com/montanoc/project2/master/scripts/data.json',
      dataType: 'json',
      success: function(data) {
        $.each(data, function(i, trash) {
          $('#message').append('<div data-current-click-count="0" data-tolerance="' + trash.clickcount + '" class="item ' + trash.item + '">' + trash.item + '</div>');
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
      $(this).append(' decomposed');

      if (currentClickCount == tolerance) {
        $(this).fadeOut();
      }
    })
  }

  /*if (clickcount == 5) {
  $(this).append('decomposed');
  } */


});
