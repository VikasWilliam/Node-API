const { response } = require("express");


    fetch('http://jsonplaceholder.typicode.com/posts')
    .then((response)=>{
      return response.json();
    })
    .then((data=>{
        console.log(data);
    }))


    fetch('https://apidemonodejs.herokuapp.com')
    .then((response)=>{
      return response.json();
    })
    .then((data=>{
        console.log(data);
    }))



    fetch('https://api.chucknorris.io/jokes/random')
    .then((response)=>{
      return response.json();
    })
    .then((data=>{
        var joke=data.value;
        console.log("Joke is:", joke)
    }))