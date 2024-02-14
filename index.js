
const express = require("express");
let { typeDefs } = require("./Schema/typeDefs")
let { resolvers } = require("./Schema/resolvers")
const { ApolloServer } = require("@apollo/server");
const { expressMiddleware } = require("@apollo/server/express4");
const app = express();
const cors = require("cors");

const { default: mongoose } = require("mongoose")
mongoose.connect("mongodb+srv://abdulrehmanabs:abs786@cluster0.x3s1kd8.mongodb.net/feet-wear-paradise").then((result) => { console.log(`🚀 DB Connected....`); }).catch((error) => { console.error("Network Error DataBase Not Connected") })

const path = require('path');

// const dotenv = require("dotenv");
// dotenv.config({ path: "./.env" });


app.use(express.urlencoded({ extended: true }));
app.use(express.static("./build"))


const bootstrapServer = async () => {
    const server = new ApolloServer({ typeDefs, resolvers });
    await server.start();

    // app.use("/graphql", expressMiddleware(server));
    app.use('/graphql', cors(), express.json(), expressMiddleware(server));



    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'build', 'index.html'))
    })

    const port = process.env.PORT || 8080;
    app.listen(port, () => {
        console.log(`🚀 Express ready at http://localhost:${port}`);
        console.log(`🚀 Graphql ready at http://localhost:${port}/graphql`);
    });
};

bootstrapServer();