
AutoForm.hooks({
  'summaryNewForm': {
    before: {
      insert: function(doc) {
        doc.createdAt = new Date();
        doc.situationId = window.localStorage.getItem("situationId");
        console.log('summary doc', doc);
        return doc;
      }
    },
    onSuccess: function (operation, result, template) {
      // console.log(this);
      console.log("successfull.....");
      window.localStorage.removeItem("situationId");
      var tip = '';
      tip = layer.open({
       type: 1,
       title: false,
       closeBtn: 0,
       shadeClose: false,
       content: '<div style="width:360px; padding-bottom:60px; text-align:center; font-size:24px;"><div style="padding-top:70px;">Success!</div><div style="padding-top:30px;"><button class="btn" id="btn" style="width:300px; display:inline-block;  font-size:24px; color:#fff;">OK</button></div></div>'
     });
     $('#btn').on('click',function(){
       layer.close(tip);
       Router.go('/date');
     })
    },
    onError: function(operation, error, template) {
      alert(error);
    }
  }
});
