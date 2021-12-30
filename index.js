let {readFile} = require('fs');

readFile("arquivo.txt", "utf-8", (erro, texto) =>{
    if (erro) {
        throw erro;
    } else{
        console.log(texto);
    }
});