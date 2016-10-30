Template.index.onRendered (function(){
  
  $('.footer-bg').css('background','none');
  $('.banner-bg').css('background','none');

  

});

Template.index.onDestroyed (function(){
  
  $('.footer-bg').css('background','#f2f2f2');
  $('.banner-bg').css('background','#fdfdfd');
  
});