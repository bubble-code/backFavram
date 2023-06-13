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

routeEmpresa.post('/', async (req, res) => {
    console.log(req.body)
    console.log(req.body)
    res.status(200).send('bien')
})

routeEmpresa.get('/parametros', async (req, res) => {
    const conectionSQL = req.conexionSQL;
    try {
        const response = await conectionSQL.query('SELECT * from vfrmMntoParametro');
        console.log(response)
        res.status(200).send(response.recordset)
    } catch (error) {
        res.status(500)
    }
})

module.exports = routeEmpresa