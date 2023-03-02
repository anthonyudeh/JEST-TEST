const MyFirstAsync = require('./fetchAsyncFunc')

test("testing async function", async()=> {
    const data = await MyFirstAsync()
    expect(data).toBe("Hello")
})