const user = {name: "Jibril"};
// The program continues after you catch your error.
try{
  //Produces a reference error.
  // myFunction();

  //Produces a TypeError.
  // null.myFunction();

  //Produces syntaxError.
  // eval("Hello world")
  
  //Produces URIError.
  // decodeURIComponent('%')

  if(!user.email){
    // throw 'User does not have an email'
    throw new SyntaxError('User has no name!')
  }
}
catch(e){
  console.log(e);
  // // Message error.
  // console.log(e.message);
  // //Name error.
  // console.log(e.name);
  // console.log(e instanceof TypeError);
  // console.log(e instanceof ReferenceError);
}
finally{
  console.log("Finally runs regardless of the result....");
}
console.log("Program continues");