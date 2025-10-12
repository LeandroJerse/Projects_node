import { Sequelize, DataTypes } from 'sequelize';

const sequelize = new Sequelize('postapp','root','leandro3cg',{
    host: "localhost",
    dialect: 'mysql'
})

sequelize.authenticate().then(function(){
    console.log("success to connect")
}).catch(function(erro){
    console.log("fail to connect\t"+erro)
})

export default {
    Sequelize: Sequelize,
    sequelize: sequelize
}