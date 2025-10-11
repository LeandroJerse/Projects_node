import { Sequelize } from "sequelize";
import sequelize from "./connection.js"

const Post = sequelize.define('post', {

    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    title: {
        type: Sequelize.STRING
    },
    content: {
        type: Sequelize.TEXT  
    }

});

Post.sync({force: true})