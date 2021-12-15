var conn = require('../../../utils/conexion');
var ObjectID = require('mongodb').ObjectId;
var _db;

class Categories{
    categoriesColl =null;
    constructor(){
        this.initModel();
    }
    

    async getAll(){
        try{
            let docsCursor = _db.find({});
            let rows = await docsCursor.toArray();
            return rows;
        }
        catch(ex){
            console.log(ex);
            throw(ex);
        }   
    }
async addOne(valor){
    try{
        let req = {
           valor: valor
        };
        let result = await _db.insertOne(req);
        return result.ops;
    }catch(ex){
        console.log(ex);
        throw(ex);
    }
}
}
module.exports = Categories;