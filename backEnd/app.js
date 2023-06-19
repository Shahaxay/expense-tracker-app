const express=require('express');
const bodyParser=require('body-parser');
const cors=require('cors');

const expenseRoute=require('./route/expense');
const sequelize = require('./util/database');

const app=express();
app.use(cors());
app.use(bodyParser.json({extended:true}));

app.use(expenseRoute);

sequelize.sync()
.then(res=>{
    app.listen(3000,()=>{console.log("listening...")});
})
.catch(err=>console.log(err));

