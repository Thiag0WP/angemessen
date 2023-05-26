const path = require("path");
const express = require("express");
const produtosRouter = express.Router();

produtosRouter.get("/produtos", (req, res) => {
    try {
        console.log(`ROTA ACESSADA: '${req.route.path}'.`);
        res.sendFile(path.join(__dirname, "../..", "/public/produtos.html"));
    } catch (err) {
        console.log(`ERRO: ${err}`);
    }
})

module.exports = produtosRouter;
