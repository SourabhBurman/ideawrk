import { DataTypes } from "sequelize";
import { sequelize } from "../db/db.js";


const UserModel = sequelize.define( 'User', {
    name: {
        type: DataTypes.STRING,
        unique: true
    },
    age: {
        type: DataTypes.INTEGER
    },
    email: {
        type: DataTypes.STRING,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
    }
});

export { UserModel };
