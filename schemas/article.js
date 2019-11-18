const articleSchema = {
    '$schema': 'http://json-schema.org/draft-07/schema#',
    
    "type": "object",
    "properties": {         
        "name": {
        "type": "string",
        "minLength": 1,
        "maxLength": 99
        },           
        "text": {
        "type": "string",
        "minLength": 1,
        "maxLength": 999
        },
        "title": {
            "type": "string",
            "minLength": 1,
            "maxLength": 20
            }
      }    
  }
  
  module.exports = articleSchema;