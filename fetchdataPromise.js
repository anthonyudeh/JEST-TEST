function MyFirstPromise (){
    //promise will return two parameters a reject and a resolve

   return new Promise ((resolve,reject)=>{
           resolve('Hello');
   })
}

module.exports = MyFirstPromise