'use strict';

$(document).ready(function() {
  $('#evolution-of-a-foundation li').click(function() {
    var link = $(this).find('a').attr('href');
    console.log('link', link);
    return false;
  });
});
