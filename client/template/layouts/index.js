Template.index.onRendered (function(){
  
  $('.footer-bg').css('background','none');
  $('.banner-bg-c').css('background','#fff');

  

});

Template.index.onDestroyed (function(){
  
  $('.footer-bg').css('background','#f2f2f2');
  $('.banner-bg-c').css('background','#fdfdfd');
  
});