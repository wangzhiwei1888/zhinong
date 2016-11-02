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
        doc.pestId = window.localStorage.getItem("pestId");
        doc.createdAt = new Date();
        return doc;
      }
    },
    onSuccess: function (operation, result, template) {
      // console.log(this);
      console.log("solutionId", result);
      window.localStorage.removeItem("pestId")
       Router.go('/summarynew',{_id:result});
    },
    onError: function(operation, error, template) {
      alert(error);
    }
  }
});
