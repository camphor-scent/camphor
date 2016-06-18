/**
 * Created by kkanapuram on 11/5/2015.
 */
var mongoose= require('mongoose'),
    Schema = mongoose.Schema,
    _=require('underscore');

var testSchema = new Schema({
    categoryId: String,
    categoryName:String,
    subCategories: [],
    createdBy: String,
    createdDate: {type: Date},
    modifiedBy: String,
    modifiedDate: {type: Date}
}, {collection : 'test' });

mongoose.model('test', testSchema);
