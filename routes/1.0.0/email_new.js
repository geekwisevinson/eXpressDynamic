const middleware = require('./../../modules/custom_middleware_setup');
const mailgun = require('mailgun-js')({apiKey: process.env.MAILGUN_API_KEY,domain:process.env.MAILGUN_DOMAIN});
const path = require('path');
const fs = require('fs');

const multer  = require('multer');
upload = multer({ dest: 'upload/'});

module.exports=(app)=> {
	app.post('/emails/new', upload.array('file1'), function(req, res) {

		let data = {};


		console.log('files',req.files);

		req.body.attachment = [];
		req.files.forEach((fileInstance) =>{
			var filename = fileInstance.originalname;
			var filepath = path.join('./upload', fileInstance.filename);
			var file = fs.readFileSync(filepath);
			var attch = new mailgun.Attachment({data: file, filename: filename});
			req.body.attachment.push(attch);
			fs.unlink(filepath, ()=>{
				console.log('deleted',filepath);
			})

		});

		mailgun.messages().send(req.body, function (error, body) {
			if(error){
				console.log('mailgun err',error);
				data = {success:false,data:req.body}
			}
			if(body){
				console.log('mailgun success');
				data = {success:true,data:req.body};
			}

			Model_Save_New(Email,data).then(
				(data)=>{
					res.json(data);
				}
			);
		});

	});
};