Template.situationNew.onRendered(function () {

});

Template.situationNew.helpers({

});

Template.situationNew.events({
  "click #cerateorgann": function(event, template){
    var name = $("input[name='cropName']").val();
    if (name) {
      Router.go('/pestnew');
    }else {
      alert("Crops Name is Required");
    }
  }
});


// AutoForm.hooks({
//   'asituationNewForm': {
//     before: {
//       insert: function(doc) {
//         // console.log(this);
//         // console.log("doc==>",doc);
//         doc.LeavrsImage = [1,2,3];
//         doc.FlowersImage = [1,2,3];
//         doc.RootImage = [1,2,3];
//         doc.createdAt = new Date();
//         return doc;
//       }
//     },
//     onSuccess: function (operation, result, template) {
//       // console.log(this);
//       console.log("situationId", result);
//       // Session.set("cropid", result);
//       window.localStorage.setItem("situationId", result);
//        Router.go('/pestnew');
//     },
//     onError: function(operation, error, template) {
//       alert(error);
//     }
//   }
// });
