Template.pestNew.onRendered(function () {
  // console.log('cropid', Session.get("cropid"));
});

Template.pestNew.helpers({

});

Template.pestNew.events({
  "click #cerateorgann": function (event, template) {
    window.localStorage.setItem("pestId", "dsafsdfdsf");
    Router.go('solutionnew', {_id: 1}, {query: 'q=s', hash: 'hashFrag'});
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
