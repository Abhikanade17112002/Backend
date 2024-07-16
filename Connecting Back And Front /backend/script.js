const express = require("express") ;
require('dotenv').config()
const  cors = require('cors')

const App = express() ;

// App.use(cors)
const PORT = process.env.PORT ;


App.get("/",( request , response )=>{
 
    
    response.json({
        "MESSAGE" : "SUCCESS"
    })


})


App.get("/api/jokes",( request , response )=>{
     
    const jokes = [
        {
            "id": 1,
            "joke": "Why don't scientists trust atoms? Because they make up everything!",
            "category": "Science",
            "rating": 4.5,
            "author": "John Doe"
        },
        {
            "id": 2,
            "joke": "Why did the scarecrow win an award? Because he was outstanding in his field!",
            "category": "Puns",
            "rating": 4.7,
            "author": "Jane Smith"
        },
        {
            "id": 3,
            "joke": "Why don't skeletons fight each other? They don't have the guts.",
            "category": "Halloween",
            "rating": 4.3,
            "author": "Mike Johnson"
        },
        {
            "id": 4,
            "joke": "What do you call fake spaghetti? An impasta!",
            "category": "Food",
            "rating": 4.8,
            "author": "Emily Davis"
        },
        {
            "id": 5,
            "joke": "How does a penguin build its house? Igloos it together!",
            "category": "Animals",
            "rating": 4.6,
            "author": "Chris Brown"
        },
        {
            "id": 6,
            "joke": "Why did the bicycle fall over? Because it was two-tired!",
            "category": "Puns",
            "rating": 4.2,
            "author": "Patricia Wilson"
        },
        {
            "id": 7,
            "joke": "Why don't some couples go to the gym? Because some relationships don't work out.",
            "category": "Relationships",
            "rating": 4.1,
            "author": "Michael Miller"
        },
        {
            "id": 8,
            "joke": "What do you call cheese that isn't yours? Nacho cheese.",
            "category": "Food",
            "rating": 4.9,
            "author": "Linda Martinez"
        },
        {
            "id": 9,
            "joke": "Why did the math book look sad? Because it had too many problems.",
            "category": "School",
            "rating": 4.4,
            "author": "Robert Lee"
        },
        {
            "id": 10,
            "joke": "What do you get when you cross a snowman and a vampire? Frostbite.",
            "category": "Halloween",
            "rating": 4.7,
            "author": "Sarah Taylor"
        }
    ] ;
    
    
    response.json(jokes).status(200);


})
App.listen(PORT , ()=>{
    console.log("SERVER STARTED AT THE LOCAL PORT ",PORT);
})