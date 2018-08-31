module.exports = {

    connect : function(){
        var mongoose = require('mongoose');
        var dbURI = 'mongodb://localhost/StartPitch';
        // Connexion à la bdd
        mongoose.connect(dbURI);

        // Stocke ma connexion dans une variable pour faire des vérifs
        var my_connection = mongoose.connection;

        // Si connexion ok, j'affiche un message
        my_connection.on('connected', function(){
            console.log('Connection faite sur ' + dbURI);
        })

        // Si erreur de connexion
        my_connection.on('error', function(err){
            console.log('Connection faite sur' + err);
        })
    },

    // On fait appel au modèle User
    User : function(){
        var user = require('./users');
        return user;
    }
   
}






