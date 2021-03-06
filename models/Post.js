const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema
const Post Schema = new Schema({
    user: {
        type: Schema.Types.ObjectID,'
        ref: 'users'
    },
    
    text: {
        type: String,
        required: true
    },
    
    name: {
        type: String
    },
    
    avatar: {
        type: String
    },
    
    likes: [
       {
           user: {
               type: Schema.Types.ObjectId,
           ref: 'users'
           }
       }
       ]
       });
       
comments: [
           {
              user: {
                  type: SChema.Types.ObjectId,
                  ref: 'users'
              },
               text: {
           type: String,
           required: true
       },
           name: {
        type: String
    },
    
    avatar: {
        type: String
    },
    
   date: {
       type: Date,
       default: Date.now
        }
     }
    ],
    date: {
        type: Date,
        default: Date.now
    }
});
      
       module.exports = Post = mongoose.model('post', PostSchema);