const Sequelize=require('sequelize');
const sequelize=require('../util/database');

const expenses=sequelize.define("expenses",{
    id:{
        type: Sequelize.INTEGER,
        primaryKey:true,
        allowNull: false,
        autoIncrement: true
    },
    amount:{
        type: Sequelize.INTEGER,
        allowNull: false
    },
    description:{
        type: Sequelize.STRING,
        allowNull:false
    },
    category:{
        type: Sequelize.STRING,
        allowNull:false
    }
});

module.exports=expenses;