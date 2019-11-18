const UserModel = require('../models/user');
module.exports.CreateUser = async (login, pwd)=> {   
    try {            
        const user = await UserModel ({login, pwd});        
        const data = await user.save();
        console.log(data);
        return data;
    }     
    catch(err) {
        console.log(err);
    }    
};

module.exports.LoginOne = async (login, pwd) => {
    try {
        const user = await UserModel.findOne({ login, pwd });
        if (user) {
            return true;
        }
        else {console.log("login or pwd invalid!"); }
    }
    catch (err) {
        console.log(err);
    }
};
