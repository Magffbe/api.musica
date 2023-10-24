const express = require ('express');
const apiMusica = express();
const db = require ('../database/conn.js');

apiMusica.get('', async (req, res)=>{

    let sql = 'select * from tbl_api_musica';
    const resul = await db.query(sql);
    res.json(result);
    
    
});

    module.exports = apiMusica;