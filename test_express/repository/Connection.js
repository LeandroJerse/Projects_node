import { Sequelize, DataTypes } from 'sequelize';

const sequelize = new Sequelize('test','root','123',{
    host: "localhost",
    dialect: 'mysql'
})

sequelize.authenticate().then(function(){
    console.log("success to connect")
}).catch(function(erro){
    console.log("fail to connect\t"+erro)
})

export default sequelize;