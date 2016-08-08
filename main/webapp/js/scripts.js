
'use strict';

$(document).ready(function() {
  $('#evolution-of-a-foundation li').click(function() {
    var link = $(this).find('a').attr('href');
    window.location.href = link;
    // console.log(link);
    return false;
  });

  $('.carousel-inner > .item').click(function(){
    var link = $(this).data('exhibit');
    window.location.href =link;
    return false;
    // console.log($(this).data('exhibit'));
  });
});
