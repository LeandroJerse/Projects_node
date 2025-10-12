import { Sequelize } from "sequelize";
import sequelize from "./connection.js"

const User = sequelize.define('user', {

    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING
    },
    lastName: {
        type: Sequelize.STRING
    },
    age: {
        type: Sequelize.INTEGER  
    }

});



User.create({name:"Victor",lastName:"Lima",age:22})