# 🏎️ Minimal API da Fórmula 1 com Node.js e Fastify

Projeto desenvolvido como parte do laboratório prático da plataforma **DIO (Digital Innovation One)**. O objetivo principal foi construir uma API REST minimalista, de alta performance e escalável para gerenciar dados de equipes e pilotos da Fórmula 1, utilizando o ecossistema moderno do Node.js.

## 🚀 Tecnologias Utilizadas

*   **Node.js**: Ambiente de execução JavaScript no servidor.
*   **Fastify**: Framework web focado em performance e baixo overhead, ideal para Minimal APIs.
*   **@fastify/cors**: Plugin para habilitar o compartilhamento de recursos entre origens diferentes (CORS), permitindo a integração segura com aplicações frontend.
*   **HTML5 / CSS3 / JavaScript (Fetch API)**: Integração e renderização dinâmica dos dados direto da API local.

## 🛠️ Funcionalidades e Endpoints

A API simula um banco de dados em memória e disponibiliza os seguintes endpoints estruturados:

1.  `GET /drivers` - Retorna a lista completa de todos os pilotos cadastrados.
2.  `GET /teams` - Retorna a listagem de todas as escuderias e suas respectivas sedes.
3.  `GET /drivers/:team` - Endpoint dinâmico com parâmetros que filtra os pilotos específicos de uma determinada equipe (ex: `/drivers/Ferrari`).

## 💻 Como Rodar o Projeto Localmente

### Pré-requisitos
Ter o [Node.js](https://nodejs.org/) instalado em sua máquina.

### Passo a Passo

1. Clone este repositório para o seu computador:
   ```bash
   git clone [https://github.com/SEU_USUARIO_DO_GITHUB/node-formula-1.git](https://github.com/SEU_USUARIO_DO_GITHUB/node-formula-1.git)

Navegue até a pasta do projeto:

```bash
cd Minimal-API-da-F-rmula-1-com-Node.js-e-Fastify

Instale as dependências necessárias:

npm install

Inicie o servidor backend:

npm start

O servidor estará rodando em http://127.0.0.1:3333.

Para visualizar o consumo no Frontend, basta abrir o arquivo index.html incluído no repositório.

