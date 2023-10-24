const express = require ('express');
const apiMusica = express();
const db = require ('../database/conn');

apiMusica.get('', async (req, res)=>{

    let sql = 'select * from tbl_api_musica';
    const resul = await db.query(sql);
    res.json(result);

    
    
});

apiMusica.get('',async (req,res)=>{
     let sql ='select * from tbl_artistas';
     const resul = await db.query(sql);
     res.json(result);
});

    apiMusica.get('',async (req,res)=>{
    let sql ='select * from tbl_albumes';
    const resul = await db.query(sql);
    res.json(result);

    });

    module.exports = apiMusica;