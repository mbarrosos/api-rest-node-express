function getHello(req, res){
    res.status(200).send({
        msg: "Hola putito!",
    })
}

module.exports = {
    getHello,
}