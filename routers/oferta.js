const express = require('express');
const routeOferta = express.Router();


routeOferta.get('/', async (req, res) => {
    const conectionSQL = req.conexionSQL;

    try {
        const result = await conectionSQL.query("SELECT * from tbOfertaComercialCabecera")
        console.log(result);
        res.status(200).send(result.recordset)
    } catch (error) {
        res.status(500).send("Error retrieving data from database");
    }
})


routeOferta.post('/rango-fecha', async (req, res) => {
    const conectionSQL = req.conexionSQL;
    const { fechaInicio, fechaFin } = req.body;
    // console.log(fechaFin,fechaInicio);
    const query = `SELECT * FROM tbOfertaComercialCabecera WHERE FechaOferta >= '${fechaInicio}' AND FechaOferta <= '${fechaFin}'`
    try {
        const result = await conectionSQL.query(query)
        console.log(result.recordset)
        res.status(200).send(result.recordset)
    } catch (error) {
        res.status(500).send("Error retrieving data from database");
    }
})

module.exports = routeOferta; 