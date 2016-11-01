Template.reset.events({
  "click #resetBtn": function(){
    var email = $("input[name='email']").val();
    console.log('email', email);

    Meteor.call("resetPsdWithEmail", email, function(error, result){
      if(error){
        console.log("error", error);
        // alert('邮箱不存在');
        alert(error);
      }
      if(result){

      }
    });
  }
});
