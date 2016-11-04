Template.situationNew.onRendered(function () {

});

Template.situationNew.helpers({

});

Template.situationNew.events({

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
      console.log("situationId", result);
      // Session.set("cropid", result);
      window.localStorage.setItem("situationId", result);
       Router.go('/pestnew');
    },
    onError: function(operation, error, template) {
      alert(error);
    }
  }
});
