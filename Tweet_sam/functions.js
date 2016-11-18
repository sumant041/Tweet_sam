var request = require('request');
var config = require('config');

functions = {
  authorize: function(req, res){
     var header  = config.consumerkey + ':' + config.consumersecret;
     var encheader = new Buffer(header).toString(base64);//converting into base-64 format
     var finalheader = 'Basic' + encheader; // Referring through the Documentation of http://dev.twitter.com/outh/application-only

     request.post('https://api.twitter.com/oauth2/token',{form:{'grant_type':'client_credentials' },
     headers:{Authorization: finalheader}}
   function(error,response,body){
     if(error)
     console.log(error);
     else {
       config.bearertoken = JSON.parse(body).access_token;
       res.json({success: true, data:config.bearertoken});
     }
   })
  }
}
module.exports = functions;
