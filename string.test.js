const string = require('./string')

test("first string test", ()=>{
    expect(string()).toMatch("hello")
})


//So we need the test to pass if the these two letters are found in the string
test("second string test", ()=>{
    expect(string()).toMatch(/ll/)
})

//so we do not want the output to match 
test("second string test", ()=>{
    expect(string()).not.toMatch(/Anthony/)
})