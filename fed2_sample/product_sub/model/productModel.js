import { DataTypes } from "sequelize";
import { sequelize } from "../db/db.js";


const ProductModel = sequelize.define( 'Product', {
    productName: {
        type: DataTypes.STRING,
    },
    category: {
        type: DataTypes.STRING
    },
    brand: {
        type: DataTypes.STRING,
    }

});

export { ProductModel };