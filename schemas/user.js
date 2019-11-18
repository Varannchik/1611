const userSchema = {
    '$schema': 'http://json-schema.org/draft-07/schema#',
    'type': 'object',
    'properties': { 
        'login': {
            'type': 'string',
            'minLength': 1,
            'maxLength': 99
        },         
        'pwd': {
            'type': 'string',
            'minLength': 1,
            'maxLength': 99
        }  
    }    
};

module.exports = userSchema;
