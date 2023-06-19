const express=require('express');

const expenseController=require('../controller/expense');

const route=express.Router();

route.post('/add-expenses',expenseController.postAddExpenses);

route.delete('/delete-expenses/:expenseId',expenseController.deleteExpense);

route.get('/get-expenses',expenseController.getExpenses)

route.get('/get-expenses/:expenseId',expenseController.getExpense)

module.exports=route;