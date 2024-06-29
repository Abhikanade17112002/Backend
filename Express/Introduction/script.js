//  Express Is a Node JS Frame Work       

/*Sure! Here's the difference between a framework and a library in simple terms:

### Library
- **What it is**: A collection of code you can use to perform specific tasks.
- **How it works**: You call the library's functions when you need them.
- **Example**: Think of it like a toolbox. You pick the tool you need when you need it.

### Framework
- **What it is**: A structure or platform for building applications.
- **How it works**: The framework provides the overall structure and calls your code at the appropriate times.
- **Example**: Think of it like a skeleton. You build your application by adding to this structure.

### Key Difference
- **Control**:
  - **Library**: You are in control and decide when to use the library.
  - **Framework**: The framework is in control and tells your code when to run.

### Simple Examples
- **Library**: If you need to do a specific task, like make an HTTP request, you might use the `requests` library in Python.
- **Framework**: If you’re building an entire web application, you might use the Django framework in Python, which provides a lot of the structure and components you need.



Express Js Manages Every Thing From Reciving The Request To Giving Bacvk The Respons e


*/



const express = require("express") 
const path = require("path")
const app = express() ;

const PORT = process.env.PORT || 3000 ;


// app.get("/" , ( request , response )=>{
//         response.send("<h1> Abhishek Rangnath Kanade</h1>")
// })


app.get('/' , (request , response )=>{
 

    const filePath = path.join(__dirname,"public","index.html") ;
    response.sendFile(filePath) ;


})
app.get('/about' , (request , response )=>{
 

      const filePath = path.join(__dirname,"public","about.html") ;
      response.sendFile(filePath) ;
  
  
  })


app.listen( PORT , ()=>{
      console.log(` Started Server , Listining On PORT ${PORT}`);
})