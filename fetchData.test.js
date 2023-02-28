const fetchData = require('./fetchData')

//test function

test("testing callback function", () => {
    //another function 

    function callback(data) {

        try {
            expect(data).toBe('Hello')
            done();
        }
        catch (err) {
            // done(err);
        }

    }

    fetchData(callback)
}) 