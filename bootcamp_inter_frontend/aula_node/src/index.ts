import express from 'express';
import usersRoute from './routes/users.route';
import statusRoute from './routes/status.route';
import errorHandler from './middlewares/error-handler.middleware';
import authorizationRoute from './routes/authorization.route';

const app = express()

// Configuraçoes da aplicação
app.use(express.json())
app.use(express.urlencoded({extended: true}))

// Configuraçoes de Rotas
app.use(usersRoute);
app.use(statusRoute);
app.use(authorizationRoute);

// Configuração dos Handlers de Erro
app.use(errorHandler);

// Inicialização do servidor
app.listen(3000, () => {
  console.log('aplicação executando na porta 3000!')
})


