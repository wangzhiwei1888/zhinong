
Template.reg.events({
  "click #regBtn": function(event, template){
    var options = new Object();
    options.email=document.getElementById("regEmail").value;
    options.password=document.getElementById("regPassword").value;
    console.log('op', options);
    console.log('email', options.email);
    console.log('pwd', options.password);
    Accounts.createUser(options, function(error, result){
      if(error){
        // console.log("error", error);
        alert(error);
      }
      if(result){

      }
    })
  }
});
