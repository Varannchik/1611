const ArticleModel = require('../models/article');

module.exports.CreateArt = async (name, text, title)=> {   
    try {            
        const article = await ArticleModel ({name, text, title});
        const data = await article.save();
        console.log(data);
            return data;
    }     
    catch(err) {
            console.log(err);
    }    
}