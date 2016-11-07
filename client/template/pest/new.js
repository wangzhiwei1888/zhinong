Template.pestNew.onRendered(function () {
  // console.log('cropid', Session.get("cropid"));
});

Template.pestNew.helpers({

});

// Template.pestNew.events({
//   "click #cerateorgann": function (event, template) {
//     var options = {};
//     window.localStorage.setItem("pestId", "dsafsdfdsf");
//     options.situationId = window.localStorage.getItem("situationId")
//     options.type = $("select[name='pesttype']").val();
//     options.name = $("input[name='pestname']").val();
//     options.userId = Meteor.userId();
//     options.Leavrs = [1,2,3];
//     options.Flowers = [1,2,3];
//     options.Root = [];
//     options.Insects = [1,2,3];
//     options.Eggs = [];
//     options.Desease = [];
//     console.log('options', options);
//     console.log('sdfsd', options.type !== "0");
//     if (options.name && options.type !== "0" && options.situationId) {
//       Meteor.call("insertPest", options, function(error, result){
//         if(error){
//           console.log("error", error);
//         }
//         if(result){
//         }
//       });
//       Router.go('solutionnew');
//     }else {
//       alert("The information is incomplete");
//     }
//     // Router.go('solutionnew', {_id: 1}, {query: 'q=s', hash: 'hashFrag'});
//   }
// });


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
