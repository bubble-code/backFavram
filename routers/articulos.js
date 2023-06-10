const express = require('express');
const routeArticulos = express.Router();


routeArticulos.get('/', async (req, res) => {
    const conectionSQL = req.conexionSQL;
    try {
        // const result = await conectionSQL.query('Select IDCliente,IDArticulo,Precio,PVP, CONVERT(varchar, FechaCreacionAudi, 120) as FechaCreacionAudi,CONVERT(varchar, FechaModificacion, 120) as FechaModificacion,UsuarioAudi,Revision from ArticuloCliente');
        const result = await conectionSQL.query("SELECT IDArticulo,DescArticulo,CONVERT(varchar, FechaAlta, 120) as FechaAlta, CCVenta,PrecioEstandarA,PVPMinimo from tbMaestroArticulo")
        console.log(result);
        res.status(200).send(result.recordset);
    } catch (error) {

    }
})

routeArticulos.post('/:id', async (req, res) => {
    const conectionSQL = req.conexionSQL;
    const idArti = req.params.id
    console.log(idArti)
    try {
        const result = await conectionSQL.query(`SELECT IDArticulo,DescArticulo,CONVERT(varchar, FechaAlta, 120) as FechaAlta, CCVenta,PrecioEstandarA,PVPMinimo from tbMaestroArticulo WHERE IDArticulo LIKE '${idArti}%'`)
        console.log(result);
        res.status(200).send(result.recordset);
    } catch (error) {

    }
})

module.exports = routeArticulos;