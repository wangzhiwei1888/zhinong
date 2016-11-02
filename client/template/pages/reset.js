Template.reset.events({
  "click #resetBtn": function(){
    var options = {};
    options.email = $("input[name='email']").val();
    console.log('email', options);
    alert(options);
    Accounts.forgotPassword(options, function (error, result) {
      if(error){
        console.log("error", error);
        // alert('邮箱不存在');
        alert(error);
      }
      if(result){

      }
    });
    // Meteor.call("resetPsdWithEmail", email, function(error, result){
    //   if(error){
    //     console.log("error", error);
    //     // alert('邮箱不存在');
    //     alert(error);
    //   }
    //   if(result){
    //
    //   }
    // });
  }
});
