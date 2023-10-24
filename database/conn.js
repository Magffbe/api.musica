
const pgp = require('pg-promise')();

const user = 'postgres';
const pass = 'Hola10$';
const host = 'localhost';
const database = 'postgres';

const conectionString = `postgresql://${user}:${pass}@{host}:5432/ `;

const db = pgp(conectionString);

db.connect()
    .then(
        ()=>{
            console.log("Conexion Exitosa");
            

        })
        .catch( (err)=>{

            console.log(`Error de Conexion ${err}`);
        })
        

            module.exports = db;
    