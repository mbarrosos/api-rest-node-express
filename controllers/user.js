const bcryptjs = require("bcryptjs");
const User = require("../models/user");

async function register(req, res){
    const user = new User(req.body);
    const {email, password} = req.body;

    try {
        if(!email) throw {msg: "Email es requerido"};
        if (!password) throw {msg: "Password es requerido"};

        const foundEmail = await User.findOne({email});
        if(foundEmail) throw {msg: "Email ya está registrado en la base de datos"};

        const salt = bcryptjs.genSaltSync(10);
        user.password = await bcryptjs.hash(password, salt);
        user.save();

        res.status(200).send(user);
       
    } catch (error) {
        res.status(500).send(error);
    }
}

module.exports = {
    register,
}