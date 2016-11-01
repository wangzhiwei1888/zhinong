
AutoForm.hooks({
  'summaryNewForm': {
    before: {
      insert: function(doc) {
        doc.createdAt = new Date();
        return doc;
      }
    },
    onSuccess: function (operation, result, template) {
      // console.log(this);
      console.log("successfull.....");
      //  Router.go('/',{_id:result});
    },
    onError: function(operation, error, template) {
      alert(error);
    }
  }
});
