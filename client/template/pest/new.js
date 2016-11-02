Template.pestNew.onRendered(function () {
  // console.log('cropid', Session.get("cropid"));
});

Template.pestNew.helpers({

});

Template.pestNew.events({
  "click #uploadActImg": function (event, template) {
    $('#myFileInput').trigger('click');
  }
});


AutoForm.hooks({
  'pestNewForm': {
    before: {
      insert: function(doc) {
        doc.situationId = window.localStorage.getItem("situationId");
        doc.createdAt = new Date();
        console.log('doc', doc);
        return doc;
      }
    },
    onSuccess: function (operation, result, template) {
      // console.log(this);
      console.log("pestId", result);
      window.localStorage.setItem("pestId", result);
      Router.go('solutionnew');
    },
    onError: function(operation, error, template) {
      alert(error);
    }
  }
});
