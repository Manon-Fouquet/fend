import {getURL} from './formHandler.js';

describe('Test the function getURL returns valid url' , ()=>
    {test('Retrieve default test returns ',()=>{
        const response = getURL('1111','test');
        expect(response).toBeDefined();
        expect(response).toBe('http://api.meaningcloud.com/sentiment-2.1?key=1111&lang=auto&txt=test');
        })
    }
);
