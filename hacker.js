const fs = require('fs');
const path = require('path');

// Caminho para o arquivo flag.txt
const filePath = path.join(__dirname, 'flag.txt');

// Função para ler e imprimir o conteúdo do arquivo
fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        console.error("Erro ao ler o arquivo:", err);
        return;
    }

    // Imprime o conteúdo do arquivo no terminal
    console.log("Conteúdo do arquivo flag.txt:");
    console.log(data);
});
