const expenses = require('../model/expenses');
const Expense=require('../model/expenses');
exports.postAddExpenses=(req,res,next)=>{
    const obj=req.body;
    Expense.create({amount:obj.amount,description:obj.description,category:obj.category})
    .then(result=>{
        console.log(result.id);
        res.json({_id:result.id});
    }) 
}

exports.getExpenses=(req,res,next)=>{
    const expId=req.params.expenseId;
    console.log(expId);
    Expense.findAll()
    .then(result=>{
        res.json(result);
    })
    .catch(err=>console.log(err));
}
exports.getExpense=(req,res,next)=>{
    const expId=req.params.expenseId;
    console.log(expId);
    Expense.findByPk(expId)
    .then(result=>{
        res.json(result);
    })
    .catch(err=>console.log(err));
}

exports.deleteExpense=(req,res,next)=>{
    const expId=req.params.expenseId;
    console.log(expId);
    Expense.findByPk(expId)
    .then(result=>{
        return result.destroy();
    })
    .then(result=>{
        res.json({status:"success"});
    })
    .catch(err=>console.log(err));
}