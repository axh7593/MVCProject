var callPage = function(req, res){
  res.render('app1')  
};

var chat = function(req, res){
  if(!req.session.account){
      return res.redirect('/');
  }  

	//res.json({word: responseWord});
};

module.exports.callPage = callPage;
module.exports.chat = chat;