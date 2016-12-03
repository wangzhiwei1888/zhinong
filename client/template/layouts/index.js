Template.index.onRendered (function(){
  
  $('.footer-bg').css('background','none');
  $('.banner-bg-c').css('background','#fff');
  $('.hideHeaderDiv').hide();
  
  // window.location.href = window.location.href;
});

Template.index.onDestroyed (function(){
  
  $('.hideHeaderDiv').show();
  $('.footer-bg').css('background','#f2f2f2');
  $('.banner-bg-c').css('background','#fdfdfd');
  
});