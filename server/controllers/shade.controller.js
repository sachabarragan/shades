const Shade = require('../models/shades');

const shadeCtrl = {};

shadeCtrl.getShades = async (req, res) => {
    const shades = await Shade.find();
    res.json(shades);
}

shadeCtrl.createShade = async (req, res) => {
    const shade = new Shade({
        tipo: req.body.tipo,
        precio: req.body.precio,
        numero: req.body.numero,
        sector: req.body.sector,
        comentario: req.body.comentario
    });
    await shade.save();
    res.json({
        'status': 'Shade saved'
    });
}

shadeCtrl.getOneShade = async (req, res) => {
    const shade = await Shade.findById(req.params.id)
    // console.log(shade);
    res.json(shade);

};

shadeCtrl.editShade = async (req, res) => {
    const { id } = req.params;
    const shade = {
        tipo: req.body.tipo,
        precio: req.body.precio,
        numero: req.body.numero,
        sector: req.body.sector,
        comentario: req.body.comentario
    };

    await Shade.findByIdAndUpdate(id, {$set: shade}, {new: true} );

    res.json({
        status: 'Shade updatedss'
    });
}

shadeCtrl.deleteShade = async (req, res, next) => {
    await Shade.findByIdAndRemove(req.params.id);

    res.json({
        status: 'Delete shade'
    });
}


module.exports = shadeCtrl;