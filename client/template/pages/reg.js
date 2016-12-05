
Template.reg.events({
  "click #regBtn": function(event, template){
    $('.form-control').each(function(){

      if($.trim($(this).val()) == ''){

        $(this).parent().find('.errMsg').show();

      }
      else{

        $(this).parent().find('.errMsg').hide();

      }
    })

    var emailReg = "\\w+([-+.]\\w+)*@\\w+([-.]\\w+)*\\.\\w+([-.]\\w+)*";

    if($.trim($('#regEmail').val()).match(emailReg)){

      $('#regEmail').parent().find('.errMsg').hide();
    }
    else{

      $('#regEmail').parent().find('.errMsg').show();

    }

    if($.trim($('#regPassword').val()).length>=6){

      $('#regPassword').parent().find('.errMsg').hide();
    }
    else{
      $('#regPassword').parent().find('.errMsg').show();
    }

    if($('.errMsg:visible').length !=0){

      return ;
    }

    var options = new Object();
    options.profile={};
    options.profile.firstName = $('#firstName').val();
    options.profile.lastName = $('#lastName').val();
    options.profile.fun = $('#fun').val();
    options.profile.companyName = $('#companyName').val();
    options.profile.companyLicience = $('#companyLicience').val();
    options.profile.localSalesAmount = $('#localSalesAmount').val();
    options.profile.focus = $('#focus').val();


    options.email=document.getElementById("regEmail").value;
    options.password=document.getElementById("regPassword").value;
    console.log('options is', options);
    console.log('email', options.email);
    console.log('pwd', options.password);
    Accounts.createUser(options, function(error, result){
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
          shadeClose: false,
          content: '<div style="width:360px; padding-bottom:60px; text-align:center; font-size:24px;"><div style="padding-top:70px;padding-left:20px; padding-right:20px;">Welcome dear Partner</div><div style="padding-top:30px;"><button class="btn" id="btn" style="width:300px; display:inline-block;  font-size:24px; color:#fff;">OK</button></div></div>'
        });

        $('#btn').on('click',function(){

          layer.close(tip);
          var hashid = window.location.hash;
          if (hashid) {
            var hash = window.location.search;
            console.log('hashid', hashid);
            var route = hash.substring(1);
            console.log('route', route);
            var route = query.substring(1);
            if (hash) {
              console.log('aa');
              Router.go(route,  {_id: 1}, {hash: hashid});
            }else {
              console.log('bb');
              Router.go("/");
            }
          }
          Router.go("/");
        })

       }
    })
  }

});
