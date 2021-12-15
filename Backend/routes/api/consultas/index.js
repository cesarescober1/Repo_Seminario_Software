var express = require('express');
var router = express.Router();
var NotesDao = require('./notes');
var notes = new NotesDao();
var CategeroisDao = require('./categories');
var categories = new CategeroisDao();

router.get("/",
async (req, res)=>{
    try{
        let rows =  await getAll();
        res.status(200).json(rows);
    }catch(ex){
        res.status(500).json({"msg":"Error"});
    }
});

router.post(
  "/new",
  async (req, res)=>{
      try{
          let {valor} = req.body;
          let docInserted = await addOne(valor);
          res.status(200).json(docInserted);
      }catch(ex){
          res.status(500).json({"msg":"Error"});
      }
  }
);

module.exports = router;
