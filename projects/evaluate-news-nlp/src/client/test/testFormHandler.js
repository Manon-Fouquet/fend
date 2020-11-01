const retrieveData = require('../js/formHandler.js');

test('Retrieve default test returns ',()=>{
    expect(retrieveData('test').toBe('The text is subjective, nonironic and expresses agreement.'))
    })
