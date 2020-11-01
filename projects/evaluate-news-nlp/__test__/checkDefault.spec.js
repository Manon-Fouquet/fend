const checkNonEmpty = require('../js/nameChecker.js');

test('Retrieve default test returns ',()=>{
    expect(checkNonEmpty('test').not.toBe('test'))
    })
