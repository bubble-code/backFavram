const sql = require('mssql');
const express = require('express');
// const configServer = require('../configIndustry.json') 

const routeNivels = express.Router();


routeNivels.get('/', async (req, res) => {
    const conectionSQL = req.conexionIndustry;
    console.log('preparando la conexion')
    console.log(req.body)
    console.log(req.body)
    // console.log(conectionSQL)

    try {
        // const result = await conectionSQL.query("SELECT * FROM ObtenerNivel('482','4200','4210')")
        // console.log(result)
    } catch (error) {
        console.log(error)
    }

})

module.exports = routeNivels; 