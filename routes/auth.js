const express = require('express');
const router = express.Router();
const Ajv = require('ajv');
const key = require('../config/key');
const ajv = new Ajv();
const userSchema = require('../schemas/user.js');
const {CreateUser} = require('../controllers/userController.js');
const {LoginOne} = require('../controllers/userController.js');
const jwt=require('jsonwebtoken');

router.get('/', function(req, res) {
    res.send('Login');
});

router.post('/registration', async (req, res) => {
    try {
        const {login, pwd} = req.body;        
        const validate = ajv.compile(userSchema);
        const valid = validate({
            login, pwd
        });
        if (!valid) {
            const {errors} = validate;
            const result = { status: 'invalid data' };
            res.json(result);
        }
        else {
            const a = await CreateUser(login, pwd);
            const token = jwt.sign({id:a._id}, key.tokenSecret);
            console.log(token);
            res.cookies('token',token);            
        }
    }
    catch (err) {
        console.log(err);
    } 
});

router.post('/login',  async (req, res) =>{
    try{
        const {login, pwd} = req.body;
        const a = await LoginOne(login, pwd);
        if (a) {
            const token = jwt.sign({id:a._id}, key.tokenSecret);        
            res.cookie('token',token);
            res.send('User is found, welcome to club');
        } else {
            res.send('User is  not found, please to registration');
        }
    }catch(err) {
        console.log(err);
    }
});

router.get('/logaut',  (req, res) =>{  
    res.clearCookie('token', {path: '/'}).status(200).send('Ok.');
});



module.exports = router;
