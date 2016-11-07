Template.reset.events({
  "click #resetBtn": function(){
    var options = {};
    options.email = $("input[name='email']").val();
    console.log('email', options);
    if (options.email) {
      Accounts.forgotPassword(options, function (e) {
        if (e) {
          console.log('error', e);
          var tip = '';
          tip = layer.open({
             type: 1,
             title: false,
             closeBtn: 0,
             shadeClose: false,
             content: '<div style="width:360px; padding-bottom:60px; text-align:center; font-size:24px;"><div style="padding-top:70px;">E-mail address does not exist Please re-enter</div><div style="padding-top:30px;"><button class="btn" id="emailerror" style="width:300px; display:inline-block;  font-size:24px; color:#fff;">OK</button></div></div>'
           });
           $('#emailerror').on('click',function(){
             layer.close(tip);
           })
        }else {
          var tip = '';
          tip = layer.open({
             type: 1,
             title: false,
             closeBtn: 0,
             shadeClose: false,
             content: '<div style="width:360px; padding-bottom:60px; text-align:center; font-size:24px;"><div style="padding-top:70px;">Mail sent successfully, please check</div><div style="padding-top:30px;"><button class="btn" id="sendsuccess" style="width:300px; display:inline-block;  font-size:24px; color:#fff;">OK</button></div></div>'
           });
           $('#sendsuccess').on('click',function(){
             layer.close(tip);
           })
          console.log("邮件已发送，请查收");
        }
      })
      // var tip = '';
      // tip = layer.open({
      //    type: 1,
      //    title: false,
      //    closeBtn: 0,
      //    shadeClose: false,
      //    content: '<div style="width:360px; padding-bottom:60px; text-align:center; font-size:24px;"><div style="padding-top:70px;">Sending...</div><div style="padding-top:30px;"><button class="btn" id="btn" style="width:300px; display:inline-block;  font-size:24px; color:#fff;">OK</button></div></div>'
      //  });
      //  $('#btn').on('click',function(){
      //    layer.close(tip);
      //  })

    }else {
      var tip = '';
      tip = layer.open({
         type: 1,
         title: false,
         closeBtn: 0,
         shadeClose: false,
         content: '<div style="width:360px; padding-bottom:60px; text-align:center; font-size:24px;"><div style="padding-top:70px;">E-mail address can not be empty</div><div style="padding-top:30px;"><button class="btn" id="emailempty" style="width:300px; display:inline-block;  font-size:24px; color:#fff;">OK</button></div></div>'
       });
       $('#emailempty').on('click',function(){
         layer.close(tip);
       })
    }
  }
});
