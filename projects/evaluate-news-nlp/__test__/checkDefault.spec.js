const checkNonEmpty = require('../src/client/js/nameChecker.js');

test('Retrieve default test returns ',()=>{
expect(checkNonEmpty('test')).not.toBe('test')
    })
