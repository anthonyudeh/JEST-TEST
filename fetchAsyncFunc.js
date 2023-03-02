function MyFirstAsync (){
   return new Promise ((reject,resolve)=>{
          resolve ("Hello")
   })
}

module.exports = MyFirstAsync