import express from 'express';
import usersRoute from './routes/users.route';
import statusRoute from './routes/status.route';

const app = express()

// Configuraçoes da aplicação
app.use(express.json())
app.use(express.urlencoded({extended: true}))

// Configuraçoes de Rotas
app.use(usersRoute);
app.use(statusRoute);

// Inicialização do servidor
app.listen(3000, () => {
  console.log('aplicação executando na porta 3000!')
})


