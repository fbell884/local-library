const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const BookSchema = new Schema({
    title: {type: String, required: true},
    author: {type: Schema.Types.ObjectId, ref: "Author", required: true},
    summary: {type: String, required: true},
    isbn: {type: String, required: true},
    genre: [{type: Schema.Types.ObjectId, ref: "Genre"}],
});

// Virtual for book's URL (Mongoose Docs: In Mongoose, a virtual 
// is a property that is not stored in MongoDB. Virtuals are typically used for computed properties on documents.)

BookSchema.virtual("url").get(function () {
    return `/catalog/book/${this._id}`;
});

// Export 
module.exports = mongoose.model("Book", BookSchema);
