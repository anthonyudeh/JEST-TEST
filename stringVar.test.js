const x = require('./stringVar')

test("test string as variable", ()=>{
    expect(x).toMatch("Hi")
})