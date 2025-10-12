import connection from "../database/connection.js"

const Post = connection.sequelize.define("posts", {

    id:{
        type: connection.Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    
    title:{
        type: connection.Sequelize.STRING
    },
    content:{
        type: connection.Sequelize.TEXT
    }

})

//Post.sync({force:true})

export default Post