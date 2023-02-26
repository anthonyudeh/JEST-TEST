const MyName = require('./name')

test("first test object", ()=> {
    expect(MyName()).toEqual({name:'Anthony'})
})