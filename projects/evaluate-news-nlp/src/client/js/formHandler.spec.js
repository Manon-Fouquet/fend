import getURL from './formHandler.js';

test('Retrieve default test returns ',()=>{
    expect(getURL('1111','test')).toBe('http://api.meaningcloud.com/sentiment-2.1?key=1111&lang=auto&txt=test');
    })
