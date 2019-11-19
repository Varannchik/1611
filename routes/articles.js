const express = require('express');
const router = express.Router();
const key = require('../config/key');
const {CreateArticle} = require('../controllers/articleController.js');
const {ShowAllArticles} = require('../controllers/articleController.js');
const jwt = require('jsonwebtoken');

router.get('/add', function(req, res) {
    res.render('addarticle', {title: 'Add article'}); 
});

router.post('/add', async (req, res) => {
    try {
        const {title, text} = req.body; 
        let {auth} = req.cookies;
        let userId = jwt.verify(auth, key.tokenSecret);
        console.log(userId.id);
        await CreateArticle(title, text, userId.id);
        res.send(title + '&nbsp' + text);
    }
    catch(err) {
        console.log(err);
    }   
});

router.get('/', async (req, res) => {
    try {
        let articles = await ShowAllArticles();
        let allarticles = '';        
        for (let i=0; i<2; i++) {
            allarticles += articles[i].title+'\n'+articles[i].text+'\n';
        }        
        res.render('index', {title: 'All articles', content: allarticles});
            
    }
    catch(err) {
        console.log(err);
    } 
});

module.exports = router;
