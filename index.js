const mongoose = require("mongoose");
const app = require("./app");
const port = process.env.PORT || 3977;
const urlMongoDb = "mongodb+srv://root:root321@miguedb.cu2gs.mongodb.net/myDatabase";

mongoose.connect(urlMongoDb, (err, res) => {
    try {
        if(err){
            throw err;
        }else{
            console.log("Se ha conectado a la base de datos exitosamente");

            app.listen(port, () => {
                console.log(`Servidor de API REST está corriendo en http://localhost:${port}`);
            });
        }
    } catch (error) {
        console.log(error);
    }
});