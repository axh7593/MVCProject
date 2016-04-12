var controllers = require('./controllers');
var mid = require('./middleware');


var router = function(app){
    app.get("/login", mid.requiresLogout, controllers.Account.loginPage);
    app.post("/login", controllers.Account.login);
    
    app.get("/signup", controllers.Account.signupPage);
    app.post("/signup", controllers.Account.signup);
    
    app.get("/logout", controllers.Account.logout);
    
    app.get("/maker", mid.requiresLogin, controllers.CanvasCall.makerPage);
    
    app.get("/chat", mid.requiresLogin, controllers.ChatCall.callPage);
    app.post("/chat", controllers.ChatCall.chat);
    
    app.get("/box", mid.requiresLogin, controllers.BoxCall.makerPage);
    
    app.get("/", controllers.Account.loginPage);
    
};


module.exports = router;