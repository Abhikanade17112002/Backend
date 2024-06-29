//  NPM Modules

// const color = require("cli-color")
// console.log(color.red("NodeJs"))
// console.log(color.green("NodeJs"))
// console.log(color.yellow("NodeJs"))
// console.log(color.white("NodeJs"))

// Local Modules

// const { register , logIn } = require("./auth/auth.js")
// register("Abhishek")
// logIn("Abhishek")

//  Core NPM Modules

// //  PATH MODULE

// const path = require("path")

// // Current Folder Name

// console.log(path.dirname(__filename));

// // Current File Name

// console.log(path.basename(__filename));

// // Current File Extension Name

// console.log(path.extname(__filename));

// // Current Parse

// console.log(path.parse(__filename));

// //  Join

// console.log( path.join(__dirname,"Orders","app.jsx"))

//  File System
const { error } = require("console");
// const fs = require("fs") ;
const path = require("path");

//  create a folder

// fs.mkdir(path.join(__dirname,"test"),(error)=>{
//      if( error)
//       {
//             console.log(error)
//       }
//       console.log("Folder Cereated Succesfully")
// })

//  create A file

// fs.writeFile(path.join(__dirname,"test","test.txt") , "Content Added " , (error)=>{
//       if( error )
//             {
//                   console.log(error) ;
//                   return ;
//             }

//             console.log('Content Added Succefully')
// })

// //  Add Data in File
// fs.appendFile(path.join(__dirname,"test","test.txt") , "\nMore Content Added " , (error)=>{
//       if( error )
//             {
//                   console.log(error) ;
//                   return ;
//             }

//             console.log('Content Added Succefully')
// })

//  Read File Data

// fs.readFile(path.join(__dirname,"test","test.txt"), "utf8" , ( error , data )=>{
//       if( error)
//             {
//                   console.log(error) ;
//             }
//             else
//             {
//                   console.log(data)
//             }

// })

//  OS Module

// //  Events Module

// const Emitter = require("events") ;
// const myEmitter = new Emitter() ;

//  myEmitter.on("someEvent" ,(data)=>{
//       console.log(data) ;
//  })
//  myEmitter.emit("someEvent",{
//       name:"Abhishek Raangnath Kanade"
//  })

//  class Auth extends Emitter {

//      register(username)
//      {
//       console.log(username,"registered");
//       this.emit("sucess",username);
//      }

//  }

//  const auth = new Auth() ;
// auth.on("sucess",(data)=>{
//       console.log("yeeeeeeeeeh",data) ;
// })

// auth.register("Abhsihek Rangnath Kanade") ;

// //  HTTP module

// const http = require("http")

//   const app = http.createServer((request , response )=>{

//       response.end() ;

//   })

//  HTTP module

const http = require("http");

const fs = require("fs");

/* 

const App = http.createServer((request , response) => {
       

      if( request.url === "/")
      {
                  // Render Home Page 
                  fs.readFile(path.join(__dirname,"index.html"),"utf8",(error,content)=>{
           

                        if( error )
                              {
                                    console.log(error) ;  
                                    return ;
                              }
                              else
                              {
                                    response.end(content) ;
                              }
            
            
                        
                  })
      }
      else if(  request.url === "/about")
            {
                  // Render Home Page 
                  fs.readFile(path.join(__dirname,"about.html"),"utf8",(error,content)=>{
           

                        if( error )
                              {
                                    console.log(error) ;  
                                    return ;
                              }
                              else
                              {
                                    response.end(content) ;
                              }
            
            
                        
                  })

            }



      
        
})



const PORT = process.env.PORT || 3000 ;

App.listen(PORT , ()=>{
      console.log(`listening On The Port ${PORT}`) ;
})

*/

const App = http.createServer((request, response) => {
  let filePath = path.join(
    __dirname,
    request.url === "/" ? "index" : request.url 

  );

  const extension = path.extname(filePath);
 
  // Render Home Page
let x ;
  if( extension === '.css' )
      {
             x = {
                  "content-type": "text/css" 
            }
            
      }else{

           x = {
                  "content-type": "text/html" 
            }
            filePath+=".html" ;
      }
    
      
  fs.readFile(filePath, "utf8", (error, content) => {
    if (error) {
      fs.readFile(path.join(__dirname, "error.html"), "utf8", (error, data) => {
        if (error) {
          response.writeHead(404,x );
          response.end("ERROR..............");
          return;
        } else {
          response.writeHead(500, x);
          response.end(data);
          return;
        }
      });
    } else {
      response.writeHead(200, x);
      response.end(content);
    }
  });
});

const PORT = process.env.PORT || 3000;

App.listen(PORT, () => {
  console.log(`listening On The Port ${PORT}`);
});
