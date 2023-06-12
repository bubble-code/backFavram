const express = require('express');
const routeEmpresa = express.Router();


routeEmpresa.get('/', async (req, res) => {
    const conectionSQL = req.conexionSQL;
    try {
        const response = await conectionSQL.query("SELECT * FROM tbDatosEmpresa")
        // console.log(response.recordset[0].Logo)
        // const lo = response.recordset[0].Logo
        // res.set('Content-Type', 'image/jpeg')
        res.status(200).send(response.recordset)
    } catch (error) {

    }
})

routeEmpresa.post('/:data', async (req, res) => {
    console.log(req.params.data)
    res.status(200).send(req.params.data)
})

module.exports = routeEmpresa