Template.login.events({
  "click #loginBtn": function(event, template){
    var user = $("input[name='email']").val();
    var password = $("input[name='password']").val();
     Meteor.loginWithPassword(user, password, function (error, result) {
       if(error){
         console.log("error", error);
         alert(error);
       }
       if(Meteor.userId()){
         console.log('SDAFDS', result);
         var tip = '';
         tip = layer.open({
   			  type: 1,
   			  title: false,
   			  closeBtn: 0,
   			  shadeClose: true,
   			  content: '<div style="width:360px; padding-bottom:60px; text-align:center; font-size:24px;"><div style="padding-top:70px;">Success!</div><div style="padding-top:30px;"><button class="btn" id="btn" style="width:300px; display:inline-block;  font-size:24px; color:#fff;">OK</button></div></div>'
   			});

   			$('#btn').on('click',function(){

   				layer.close(tip);
          Router.go("/");
   			})

       }
      //  if(result){
      //    console.log('SDAFDS', result);
      //  }
     })
  }
});