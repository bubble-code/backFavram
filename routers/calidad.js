const express = require('express');
const routeCalidad = express.Router();


routeCalidad.get('/', async (req, res) => {
    const conectionSQL = req.conexionSQL;
    try {
        const result = await conectionSQL.query("SELECT * FROM dbo.ObtainAllIncide()")
        console.log(result)
        // const j = [].reduce(())
        res.status(200).send(result.recordset)
    } catch (error) {

    }
})

routeCalidad.post('/:id', async (req, res) => {
    const conectionSQL = req.conexionSQL;
    const idArti = req.params.id;
    try {
        const result = await conectionSQL.query()
    } catch (error) {
        
    }
})
module.exports = routeCalidad;