import Fastify from 'fastify';
import cors from '@fastify/cors';

const app = Fastify({ logger: true });

// Configurando o CORS para permitir que aplicações frontend acessem a API
await app.register(cors, {
    origin: "*", 
});

// Banco de dados simulado em memória (Boilerplate de dados)
const teams = [
    { id: 1, name: "McLaren", base: "Woking, United Kingdom" },
    { id: 2, name: "Mercedes", base: "Brackley, United Kingdom" },
    { id: 3, name: "Red Bull Racing", base: "Milton Keynes, United Kingdom" },
    { id: 4, name: "Ferrari", base: "Maranello, Italy" }
];

const drivers = [
    { id: 1, name: "Lando Norris", team: "McLaren" },
    { id: 2, name: "Oscar Piastri", team: "McLaren" },
    { id: 3, name: "Lewis Hamilton", team: "Ferrari" },
    { id: 4, name: "Charles Leclerc", team: "Ferrari" },
    { id: 5, name: "Max Verstappen", team: "Red Bull Racing" },
    { id: 6, name: "George Russell", team: "Mercedes" }
];

// 1. Endpoint: Listar todas as equipes
app.get('/teams', async (request, reply) => {
    return teams;
});

// 2. Endpoint: Listar todos os pilotos
app.get('/drivers', async (request, reply) => {
    return drivers;
});

// 3. Endpoint com Parâmetro: Filtrar pilotos por equipe (Filter Driver)
app.get('/drivers/:team', async (request, reply) => {
    const { team } = request.params;
    
    // Filtra buscando correspondência sem diferenciar maiúsculas/minúsculas
    const filteredDrivers = drivers.filter(
        d => d.team.toLowerCase() === team.toLowerCase()
    );

    if (filteredDrivers.length === 0) {
        return reply.status(404).send({ message: "Nenhum piloto encontrado para esta equipe." });
    }

    return filteredDrivers;
});

// Inicializando o servidor minimalista
const start = async () => {
    try {
        await app.listen({ port: 3333 });
        console.log("🏎️ Servidor da F1 rodando na porta 3333!");
    } catch (err) {
        app.log.error(err);
        process.exit(1);
    }
};

start();