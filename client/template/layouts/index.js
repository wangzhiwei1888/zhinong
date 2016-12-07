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


Template.index.events({
  "click .currentuser": function(event, template){
    var tip = '';
    tip = layer.open({
     type: 1,
     title: false,
     closeBtn: 0,
     shadeClose: false,
     content: '<div style="width:360px; padding-bottom:60px; text-align:center; font-size:24px;"><div style="padding-top:70px;padding-left:20px; padding-right:20px;">You have signed in!</div><div style="padding-top:30px;"><button class="btn" id="btn" style="width:300px; display:inline-block;  font-size:24px; color:#fff;">OK</button></div></div>'
   });

   $('#btn').on('click',function(){
     layer.close(tip);
   })
  }
});
