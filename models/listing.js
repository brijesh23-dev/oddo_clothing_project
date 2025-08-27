const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title: {
        type: String
    },
    description: {
        type: String
    },
    image: {
      filename: String,
      url: String
},
    category:{
        type:String
    },
    type: {
        type: String
    },
    size: {
        type: String
    },
    condition: {
        type: String
    }
});

const Listing = mongoose.model('Listing', listingSchema);
module.exports = Listing;

