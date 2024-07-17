const fs = require("fs")

function getTodosLivros() {
    const livros = JSON.parse(fs.readFileSync("livros.json"));
    console.log(livros); // Adicione esta linha para ver o valor de livros no console
    return livros;
}

function getLivrosPorId(id) {
    const livros = JSON.parse(fs.readFileSync("livros.json"))
    console.log(livros); // Adicione esta linha para ver o valor de livros no console

    const livroFiltrado = livros.filter( livro => livro.id === id )[0]
    
    console.log(livroFiltrado); // Adicione esta linha para ver o valor de livros no console
    return livroFiltrado
}

module.exports = {
    getTodosLivros,
    getLivrosPorId
}