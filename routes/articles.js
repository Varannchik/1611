const express = require('express');
const router = express.Router();
const Ajv = require('ajv');
const ajv = new Ajv();
const articleSchema = require('../schemas/article.js');
const {CreateArt} = require('../controllers/articleController.js');




router.post('/add', async (req, res) => {
    try {
        const {name, text, title} = req.body; 
        //вставить имя зарегестированного юзера
        const validate = ajv.compile(articleSchema);
        const valid = validate({
            name, text, title
        });
      
        if (!valid) {
            const {errors} = validate;
            const result = { status: 'invalid data' };        
            res.json(result);
        }
        else {
            await CreateArt(name, text, title);
        }
    }
    catch(err) {
        console.log(err);
    }   
});
module.exports = router;
