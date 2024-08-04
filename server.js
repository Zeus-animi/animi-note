const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true })); // Suporte para application/x-www-form-urlencoded
app.use(bodyParser.json()); // Suporte para application/json
app.use(express.static('public')); // Serve arquivos estáticos da pasta 'public'

let dataStore = {}; // Armazenamento em memória

app.post('/save', (req, res) => {
    const id = Date.now().toString(); // Gera um ID único baseado no timestamp
    dataStore[id] = req.body; // Armazena os dados
    res.json({ id }); // Retorna o ID gerado
});

app.get('/data', (req, res) => {
    const id = req.query.id;
    const data = dataStore[id]; // Recupera os dados pelo ID
    if (data) {
        // Exibe os dados de forma formatada
        res.send(`
            <html>
                <head>
                    <title>Dados do Animal</title>
                    <link rel="stylesheet" href="styles.css">
                </head>
                <body>
                    <h1>Dados do Animal</h1>
                    <p><strong>Nome:</strong> ${data.nome}</p>
                    <p><strong>Raça:</strong> ${data.raca}</p>
                    <p><strong>Data de Nascimento:</strong> ${data.data_nascimento}</p>
                    <p><strong>Vacinas Tomadas:</strong> ${data.vacinas}</p>
                    <p><strong>Gênero:</strong> ${data.gender}</p>
                    <p><strong>Castrado:</strong> ${data.castration}</p>
                    ${data.gender === 'female' ? `
                        <p><strong>Número de Filhotes:</strong> ${data.num_filhotes}</p>
                        <p><strong>Data de Nascimento dos Filhotes:</strong> ${data.data_cios}</p>
                    ` : ''}
                    <a href="/">Voltar</a>
                </body>
            </html>
        `);
    } else {
        res.status(404).send('Dados não encontrados');
    }
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});


