let { gql } = require("apollo-server")

const typeDefs = gql`
    
    type User {
        _id: String!
        first: String! 
        last: String!
        email: String!
        password: String!
    }

    type returnLogedUser{
        logedUser:User
        token:String
    }

    type product{
        _id:String!
        owner:String!
        title:String!
        dic:String!
        img:String!
        size:String!
        price:Int!
    }

    type Query {
        users: [User!]
        user( email:String!,password:String! ): returnLogedUser
        logedUser:User!
        
        checkToken(token:String!):User!
        
        getOrders(email:String!):[product!]
    }





    
    input createInput{
        first: String! 
        last: String!
        email: String!
        password: String!
    }

    input productsInput{
        owner:String!
        title:String!
        price:Int!
        size:String!
        img:String!
        dic:String!
        id:String
        img2:String
        img3:String
        brand:String
    }

    type Mutation {
        createUser( input:createInput! ): User!
        saveOrders( input:[productsInput!] ):[product!]
    }
    
`
module.exports = { typeDefs }