
import { UserModel } from "../model/userModel.js"

const resolvers = {
    Query: {
        users : async ()=> {
            try{
                const users = await UserModel.findAll();
                return users;
            } catch(error) {
                throw new Error(error.message)
            }
        }
    },
    Mutation: {
        createUser : async (_,{name, age, email, password})=> {
            try {
                const newUser = await UserModel.create({name,age,email,password})
                return newUser
            } catch(error) {
               throw new Error(error.message)
            }
           
        }
    }
}

export { resolvers };