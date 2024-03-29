import { ApolloGateway } from "@apollo/gateway"
import { ApolloServer } from "apollo-server"
import fs from 'fs';

const gatewaySchema = fs.readFileSync('/supergraph.graphql','utf-8').toString();
const gateway = new ApolloGateway({
    // serviceList : [
    //     {name: 'users', url:'http://localhost:4000/graphql'},
    //     {name: 'products', url:'http://localhost:5000/graphql'}
    // ]
    gatewaySchema

})

const server = new ApolloServer({
     gateway,
    // subscription: false


})

server.listen({port : 8000}).then(({url})=>{ console.log(`gateway ready at ${url}`)});