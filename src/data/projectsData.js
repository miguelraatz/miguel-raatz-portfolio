import recipes from '../images/recipes-app.png'
import trybewallet from '../images/trybewallet.png'
import trivia from '../images/trivia.png'
import blogs from '../images/node-express.png'
import tfc from '../images/tfc.png'
import python from '../images/python.png'

export const projects = [
  
    {
      name: 'Recipes App',
      image: recipes,
      linkRepo: 'https://github.com/miguelraatz/react-contextApi-recipes-app',
      linkDeploy: 'https://recipes-app-two-kappa.vercel.app/',
      description: `Foi implementado, em equipe, um app de receitas, utilizando o que há de mais moderno dentro do ecossistema React: Hooks e Context API! Nessa aplicação de receitas é possível ver, buscar, filtrar, favoritar e acompanhar o progresso de preparação de receitas e drinks.`,
      skills: 'JavaScript, HTML, CSS, React, ContextAPI, Hooks e Jest'
    },
    {
      name: 'Trybe Wallet',
      image: trybewallet,
      linkRepo: 'https://github.com/miguelraatz/react-redux-trybeWallet',
      linkDeploy: 'https://react-redux-trybe-wallet.vercel.app/',
      description: `Carteira de controle de gastos com conversor de moedas.`,
      skills: 'JavaScript, React, Redux, HTML, CSS'
    },
    {
      name: 'Trivia',
      image: trivia,
      linkRepo: 'https://github.com/miguelraatz/react-redux-trivia',
      linkDeploy: 'https://game-trivia-rust.vercel.app/',
      description: `Foi implementado um jogo de perguntas e respostas baseado no jogo Trivia (tipo um show do milhão americano) utilizando React e Redux, desenvolvendo em grupo suas funcionalidades de acordo com as demandas definidas em um quadro Kanban.`,
      skills: 'JavaScript, React, Redux, HTML, CSS'
    },
    {
      name: 'Blogs API',
      image: blogs,
      linkRepo: 'https://github.com/miguelraatz/node-express-blogs-api',
      linkDeploy: '',
      description: `No projeto Blog Api houve a criação de uma API RESTful, na sua construção utilizei o modelo MSC [ MODEL - SERVICE - CONTROLLER] e também foi implementado uma conexão com o banco de dados feita com o ORM SEQUELIZE e a autenticação com Json Web Token.`,
      skills: 'NodeJS, Docker, MySQL, ExpressJS, SequelizeJS'
    },
    {
      name: 'Trybe Futebol Clube',
      image: tfc,
      linkRepo: 'https://github.com/miguelraatz/node-TFC',
      linkDeploy: '',
      description: `Aplicação Full Stack de uma tabela de informações que exibia partidas e classificações de futebol.`,
      skills: 'TypeScript, NodeJS, MySQL, ExpressJS, SequelizeJS, Docker, POO, Mocha, Chai e Sinon'
    },
    {
      name: 'Restaurant Orders',
      image: python,
      linkRepo: 'https://github.com/miguelraatz/python-restaurant-orders',
      linkDeploy: '',
      description: `Objetivo desse projeto era desenvolver um programa que gere relatórios com informações sobre os pedidos e as pessoas clientes que frequentam a lanchonete. Estes dados auxiliariam para a alavancar as vendas e o número de pessoas clientes de um restaurante.`,
      skills: 'Python, Pytest, Manipulação de HashMap, Dict, Set'
    },
  
]