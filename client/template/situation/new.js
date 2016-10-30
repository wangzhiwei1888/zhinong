Template.situationNew.onRendered(function () {

});

Template.situationNew.helpers({

});

Template.situationNew.events({
  "click #uploadActImg": function (event, template) {
    $('#myFileInput').trigger('click');
  }
});


AutoForm.hooks({
  'asituationNewForm': {
    before: {
      insert: function(doc) {
        // console.log(this);
        // console.log("doc==>",doc);
        doc.createdAt = new Date();
        return doc;
      }
    },
    onSuccess: function (operation, result, template) {
      // console.log(this);
      console.log("343", result);
       Router.go('/',{_id:result});
    },
    onError: function(operation, error, template) {
      alert(error);
    }
  }
});
