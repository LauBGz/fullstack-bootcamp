exports.checkBody = (res, body, arrayValores) => {
    for (const valor of arrayValores){
        if (Object.keys(body).indexOf(valor) === -1){
            res.status(400).send({"error": "Revisa tu body."});
            throw new Error("Body mal formado");
        }
    }
}