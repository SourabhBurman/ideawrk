import { ProductModel } from "../model/productModel.js";

const resolvers = {
    Query: {
        products: async ()=> {
            try{
                const products = await ProductModel.findAll();
                return products;
            } catch(error) {
                throw new Error(error.message)
            }
        }
    },
    Mutation: {
        createProduct : async (_,{productName, category, brand})=> {
            console.log(productName, category, brand);
            try {
                
                const newProduct = await ProductModel.create({productName,category,brand})
                return newProduct
            } catch(error) {
               throw new Error(error.message)
            }
        }
    }
}

export { resolvers }