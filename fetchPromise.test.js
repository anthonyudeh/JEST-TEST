const MyFirstPromise = require('./fetchdataPromise')


test("Promise testing",()=>{
    return MyFirstPromise().then((data)=>{
        expect(data).toBe('Hello')
    })
})


// test("Promise testing",async ()=>{
//     const data = await MyFirstPromise()
//     expect(data).toBe('Hello')
// })
