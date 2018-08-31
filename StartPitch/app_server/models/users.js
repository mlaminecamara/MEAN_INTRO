const mongoose = require('mongoose');
// const bcrypt = require('bcrypt');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: 
  {
    type: String,
    trim:true,
    required:[true, "Name is required"]

  },
  email:
   {
    type:String, 
    required:[true, "Email required"],
    unique:true,
    trim:true,
    match:[/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}/ , "Email format not valid"]
   },

  password:
  {
    type:String, 
    required:[true, "Password is required"],
  },

  update: 
  {
  type:Date, 
  default:Date.now
}

});

// fonction à exécuter avant l'insertion en base de données

// userSchema.pre('create', function(next){
//   if(this.password){
//     this.password = bcrypt.hashSync(this.password, 10)
//   }
//   next()
// });

module.exports = mongoose.model('User', userSchema)