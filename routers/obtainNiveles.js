const sql = require('mssql');
const express = require('express');
// const configServer = require('../configIndustry.json') 

const routeNivels = express.Router();


routeNivels.get('/', async (req, res) => {
    try {
        // const conectSQL = await sql.connect(configServer)
        console.log('Conexion establecido')
    } catch (error) {

    }

})

module.exports = routeNivels;