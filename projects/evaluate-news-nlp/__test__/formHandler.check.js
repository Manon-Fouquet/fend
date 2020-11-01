const retrieveData = require('../src/client/js/formHandler.js');

test('Retrieve default test returns ',()=>{
    expect(retrieveData('test').toBe('The text is subjective, nonironic and expresses agreement.'))
    })
