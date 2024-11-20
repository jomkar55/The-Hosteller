const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const mongoose = require('mongoose');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');
const bodyParser = require("body-parser")
const cors = require("cors");

const app = express();

const server = new ApolloServer({
    typeDefs,
    resolvers,
});

app.use(bodyParser.json())
app.use(cors());

const startServer = async () => {
    await server.start();
    server.applyMiddleware({ app });

    app.listen({ port: 4000 }, () =>
        console.log(`Server is running at http://localhost:4000${server.graphqlPath}`)
    );
};

startServer();

const uri = "mongodb+srv://jomkar55:FFnmVisSBcWhwRPl@cluster0.pybc3.mongodb.net/"
mongoose.connect(uri)
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.log(err));