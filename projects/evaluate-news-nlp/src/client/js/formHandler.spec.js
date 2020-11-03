import {buildMessage} from './formHandler.js';

describe('Test the function getURL returns valid url' , ()=>
    {test('Retrieve default test returns ',()=>{
        let json = {
            'subjectivity': 'OBJECTIVE',
            'irony': 'NONIRONIC',
            'agreement': 'DISAGREEMENT',
            'confidence': '95',
        }
        const response = buildMessage(json);
        expect(response).toBeDefined();
        expect(response).toBe('The text is objective, nonironic and expresses disagreement.');
        })
    }
);
