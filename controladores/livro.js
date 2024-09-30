function getLivros (req, res) {
    try {
        //throw new Error("Erro teste")  
        res.send("Você fez uma requisição do tipo Get")
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

module.exports = {
    getLivros
}