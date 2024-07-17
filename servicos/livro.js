const fs = require("fs")

function getTodosLivros() {
    const livros = JSON.parse(fs.readFileSync("livros.json"));
    //console.log(livros); // Adicione esta linha para ver o valor de livros no console
    return livros;
}

function getLivroPorId(id) {
    const livros = JSON.parse(fs.readFileSync("livros.json"))
    //console.log(livros); // Adicione esta linha para ver o valor de livros no console
    const livroFiltrado = livros.filter( livro => livro.id === id )[0]
    //console.log(livroFiltrado); // Adicione esta linha para ver o valor de livros no console
    return livroFiltrado
}

function insereLivro(livroNovo){
    const livros = JSON.parse(fs.readFileSync("livros.json"));
    const novaListaDeLivros = [...livros, livroNovo]
    fs.writeFileSync("livros.json", JSON.stringify(novaListaDeLivros))
}

function modificaLivro(modificacoes, id){
    let livrosAtuais = JSON.parse(fs.readFileSync("livros.json"));
    const indiceModificado = livrosAtuais.findIndex(livro => livro.id === id)
    const conteudoMudado = { ...livrosAtuais[indiceModificado], ...modificacoes }
    livrosAtuais[indiceModificado] = conteudoMudado
    fs.writeFileSync("livros.json", JSON.stringify(livrosAtuais))
}

function deletaLivroPorId(id) {
    const livros = JSON.parse(fs.readFileSync("livros.json"))
    console.log(livros); // Adicione esta linha para ver o valor de livros no console
    const livrosFiltrados = livros.filter( livro => livro.id !== id )
    console.log(livrosFiltrados); // Adicione esta linha para ver o valor de livros no console
    fs.writeFileSync("livros.json", JSON.stringify(livrosFiltrados))
}

module.exports = {
    getTodosLivros,
    getLivroPorId,
    insereLivro,
    modificaLivro,
    deletaLivroPorId
}