let { ApolloServer } = require("apollo-server")

require("dotenv").config()

const { default: mongoose } = require("mongoose")
mongoose.connect("mongodb+srv://abdulrehmanabs:abs786@cluster0.x3s1kd8.mongodb.net/feet-wear-paradise").then((result) => { console.log("DB Connected....") }).catch((error) => { console.warn("Network Error DataBase Not Connected") })

let { typeDefs } = require("./Schema/typeDefs")
let { resolvers } = require("./Schema/resolvers")
let server = new ApolloServer({ typeDefs, resolvers })



// listening at random port
server.listen({ port: 7080 }).then(({ url }) => {
    console.log(`Your server is running on    ${url}  :)`)
})