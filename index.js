import express from 'express';

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Bem-vindo à Central de Informações do Senai!');
});

app.get('/status', (req, res) => {
  res.json({ status: 'servidor online' });
});

app.get('/escola', (req, res) => {
  res.json({
    nome: 'Senai Valinhos',
    cidade: 'Valinhos',
    tipo: 'Ensino Técnico'
  });
});

app.get('/cursos', (req, res) => {
  res.json([
    { id: 1, nome: 'Desenvolvimento de Sistemas' },
    { id: 2, nome: 'Redes de Computadores' },
    { id: 3, nome: '1TDS1' }
  ]);
});


app.get('/professor', (req, res) => {
  res.json({
    nome: 'Eduardo Cesar',
    disciplina: 'Programação Back-End 1'
  });
});


app.get('/ajuda', (req, res) => {
  res.send('Rotas disponíveis:\n- GET / : Boas-vindas\n- GET /status : Estado do servidor\n- GET /escola : Informações da escola\n- GET /cursos : Lista de cursos\n- GET /professor : Dados do professor\n- GET /ajuda : Lista de orientações');
});


app.get('/requisicao', (req, res) => {
  res.json({
    metodo: req.method,
    caminho: req.path,
    mensagem: 'Solicitação recebida com sucesso!'
  });
});


app.listen(PORT, () => {
  console.log(`Servidor a rodar em http://localhost:${PORT}`);
});