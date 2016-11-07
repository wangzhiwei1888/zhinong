Template.s3_tester.events({
	"click button.upload": function(){
		var files = $("input.file_bag")[0].files

		S3.upload({
				files:files,
				path:"subfolder",
        unique_name:false
			},function(e,r){
				console.log(r);
		});
		// $('#imageupload').trigger('click');
	},
	"click #cerateorgann": function(){
		console.log('collection is', S3.collection.find().fetch());
		// $('#imageupload').trigger('click');
	},
})

Template.s3_tester.helpers({
	files: function(){
    console.log('collection is', S3.collection.find());
		return S3.collection.find();
	}
})
