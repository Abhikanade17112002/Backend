const jwt = require("jsonwebtoken") ;


const isUserLoggedIn = (request,response,next) =>{
   
  
    if(request.cookies.token === undefined || request.cookies.token ===  "" )
    {
       return   response.status(401).redirect("/user/signin");
    }
    const user = jwt.verify(request.cookies.token,process.env.JWTSECRETE) ;
    request.currentUser = user ;
    console.log(request.currentUser,"HIIIII");
    next() ;

} ;



//export function 
module.exports = isUserLoggedIn ;