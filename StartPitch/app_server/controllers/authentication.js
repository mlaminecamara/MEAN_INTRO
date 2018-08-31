module.exports = {

    register: function(res,name, email, password, passwordconf) {
        if(password != passwordconf)
            return res.status(400).send('Password does not match passwordconfirmation')
        if(password.length < 4)
            return res.status(400).send("Password too short")
            
        let db = require('../models/db');
        db.connect();
        user = db.User();
        const bcrypt = require('bcrypt');
        hashedpass = bcrypt.hashSync(password,10)
        
        user.create({name:name, email:email, password:hashedpass}, function(err, user){
        if(err)
            res.status(404).send(err.message);    
        else
            res.status(200).send('user registered, ' + '' + 'account created for ' + ''+ user.name);
        }) 
        
    },
    
    login: function(req, res){
        let db = require('../models/db');
        db.connect();
        user = db.User();
        const bcrypt = require('bcrypt');

        user.findOne({email:req.body.email}, function(err, user)
        {
            if(err)
                return res.status(500).json({'title': 'error', 'message':'err.message'})
            if(!(user) || !(bcrypt.compareSync(req.body.password, user.password)))
                return res.status(400).json({'title': 'error', 'message': 'Wrong email or password'})
            res.status(200).json({'title': 'Success', 'message': user.name + ' ' + 'Successfully logged in'})
        })

    }

}

