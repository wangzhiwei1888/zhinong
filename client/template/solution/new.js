Template.solutionNew.onRendered(function () {

});

Template.solutionNew.helpers({

});

Template.solutionNew.events({
  "click #uploadActImg": function (event, template) {
    $('#myFileInput').trigger('click');
  }
});


AutoForm.hooks({
  'solutionNewForm': {
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
       Router.go('/summarynew',{_id:result});
    },
    onError: function(operation, error, template) {
      alert(error);
    }
  }
});
