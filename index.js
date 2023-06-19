const express = require('express')
const sql = require('mssql')
const configServer = require('./configServer.json')
const cors = require('cors')
const bodyParser = require('body-parser')
const configIndustry = require('./configIndustry.json');

// Import Routers
const routeArticulos = require('./routers/articulos')
const routeCalidad = require('./routers/calidad')
const routeOferta = require('./routers/oferta')
const routeEmpresa = require('./routers/empresa');
const routeNivels = require('./routers/obtainNiveles')


const app = express();
const port = 4050;


const Main = async () => {
    try {
        // const conectSQL = await sql.connect(configServer);   
        const conectIndustry = await sql.connect(configIndustry)

        console.log('Conexion establecida a SQL')

        // Middleware para adjuntar la conexión a las solicitudes
        app.use((req, res, next) => {
            // req.conexionSQL = conectSQL;
            req.conexionIndustry = conectIndustry;
            next();
        })

        // Resto de Middlewares
        app.use(cors({ origin: true }));
        app.use(bodyParser.json())


        //Routes
        app.use('/articulos', routeArticulos)
        app.use('/calidad', routeCalidad)
        app.use('/oferta', routeOferta)
        app.use('/empresa', routeEmpresa)
        app.use('/bi', routeNivels)

        // Inicializar Server
        app.listen(port, () => {
            console.log(`Servidor escuchando en puerto ${port}`)
        })
    } catch (error) {
        console.error("Error", error)
    }
}

Main()


