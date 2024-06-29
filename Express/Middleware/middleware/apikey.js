

const checkAPIKey = ( request , response , next ) =>{
    const SYSTEM_API_KEY = "1234" ;
    console.log(request.query );
    const {USER_API_KEY} = request.query ;

    if( USER_API_KEY && USER_API_KEY === SYSTEM_API_KEY)
      {
          next() ;
      }
      else
      {
            response.json({
                  message : "SORRY .... , INVALID API KEY "
            })
      }
} ;


module.exports = checkAPIKey ;