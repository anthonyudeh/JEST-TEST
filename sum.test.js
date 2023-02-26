const sum = require('./sum')


//test case we have to put a test function
test(" first test case", ()=> {
    expect(sum()).toBe(3)
});

test(" second test case", ()=> {
    expect(sum()).not.toBe(30)
});

/* test(" second test case", ()=> {
    expect(sum(100,200)).not.toBe(30)
});

*/


//expect -----> sum function should return 3 and that should be chained to to.Be

//------Test an Object------//
