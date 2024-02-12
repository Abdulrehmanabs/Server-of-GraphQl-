
let jwt = require("jsonwebtoken")
let { Users } = require("../modals/user")
let { Orders } = require("../modals/orders")


const resolvers = {

    Query: {
        users: async (parents, args, context) => {
            return await Users.find();
        },
        user: async (parents, args, context) => {
            const usermilgya = await Users.findOne(args);
            if (usermilgya) {
                let userToken = jwt.sign({ ...usermilgya }, 'Authenticated by ABS', { expiresIn: '2d' })
                return { logedUser: usermilgya, token: userToken }
            } else {
                return ({ logedUser: usermilgya, token: null })
            }
        },
        checkToken: async (parents, args, context) => {
            let myData = jwt.verify(args.token, 'Authenticated by ABS')
            return await Users.findOne({ email: myData._doc.email, password: myData._doc.password })
        },
        getOrders: async (parents, args, context) => {
            return await Orders.find({ owner: args.email })
        }

    },

    Mutation: {
        createUser: async (parent, args, context) => {
            let { input } = args
            let newUser = await Users(input)
            newUser.save()
            return newUser
        },
        saveOrders: async (parent, args, context) => {
            let { input } = args
            return await Orders.insertMany(args.input)
        }

    }
}

module.exports = { resolvers }