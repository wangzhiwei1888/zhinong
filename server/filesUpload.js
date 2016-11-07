var multiparty = require('multiparty');
var util = require('util');

Router.map(function() {

	this.route('serverFile', {
		where: 'server',
		path: '/files',
		action: function(req,res) {

		    var form = new multiparty.Form();

		    form.parse(req, function(err, fields, files) {
		      if (err) {
		        res.writeHead(400, {'content-type': 'text/plain'});
		        res.end("invalid request: " + err.message);
		        return;
		      }
		      // console.log(req)
		      // console.log(req.files);
		      res.writeHead(200, {'content-type': 'text/plain'});
		      res.write('received fields:\n\n '+util.inspect(fields));
		      res.write('\n\n');
		      res.end('received files:\n\n '+util.inspect(files));

		    })


		}
	});

})
