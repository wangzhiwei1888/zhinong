Template.reset.events({
  "click #resetBtn": function(){
    var options = {};
    options.email = $("input[name='email']").val();
    console.log('email', options);
    // alert(options);
    Accounts.forgotPassword(options, function (e) {
      if (e) {
        console.log('error', e);
      }else {
        alert("邮件已发送，请查收");
      }
    })
  }
});
