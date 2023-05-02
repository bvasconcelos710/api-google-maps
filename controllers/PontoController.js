const Ponto = require('../models/Ponto');

const listarPontos = async (req, res) => {
    const pontos = await Ponto.findAll();
    res.status(200).send(pontos);
}

const salvarPonto = async (req, res) => {
    try {

        const obj = {
            descricao: req.body.descricao,
            geometria: {
                type: 'Point',
                coordinates: [req.body.lat, req.body.lng]
            }
        }
        const ponto = await Ponto.create(obj);
        if (ponto != null) {
            res.status(201).send("Ponto criado");
        }
    } catch (e) {
        console.log(e);
        res.status(400).send("Falha ao salvar");
    }
}

const sincronizar = async (req, res) => {
    try {
        await Ponto.sync();
        res.status(200).send("Sincronizado");
    } catch (e) {
        console.log(e);
    }
}



module.exports = { listarPontos, salvarPonto, sincronizar };
