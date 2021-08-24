const express = require('express'); const app = express();
const cors = require('cors');
const path = require('path');

// body-parser app.use(express.json());
app.use(express.urlencoded({extended:false})); 
app.use(express.static(path.join(__dirname, 'build')));
app.set('port', process.env.PORT | 8080);
app.use(cors());
app.get('/', (req,res)=>{
    res.send("Bienvenido a mi API by Jefferson Vega");
});
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
})

app.use("/estudiante",require("./routes/estudiante") );

app.get('*', (req, res) => {
    res.status(404).send("<h1>Error 404</h1><h2>Página no encontrada</h2>")
});

app.use("/estudiante",require("./routes/estudiante") );

app.listen(app.get('port')); console.log(`Server on port ${app.get('port')}`)
