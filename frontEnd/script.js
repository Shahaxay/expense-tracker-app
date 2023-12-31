window.addEventListener("DOMContentLoaded",async()=>{
    try{
        const result=await axios.get("http://localhost:3000/get-expenses");
        result.data.forEach(element => {
            display(element);
        });

    }
    catch(err){
        console.log(err);
    }
})

//Add Expence
var price = document.getElementById("price");
var desc = document.getElementById("desc");
var cat = document.getElementById("cat");
document.querySelector("input[type=submit]").addEventListener("click", store);
async function store(e) {
    e.preventDefault();
    var obj = {
        amount: price.value,
        description: desc.value,
        category: cat.value
    }
    try{
        const result=await axios.post("http://localhost:3000/add-expenses", obj);
        console.log(result.data._id)
        obj.id = result.data._id;
        display(obj);
        //removing values from input field
        price.value = "";
        desc.value = "";
        cat.value = "";

    }
    catch(err){
            console.log(err);
        };
}
//displey funciton
function display(obj) {
    //showing in the console
    var text = obj.amount + " - " + obj.category + " - " + obj.description;
    //console.log(text);
    //creating elements
    var newEle = document.createElement("li");
    newEle.setAttribute("data-key", obj.id);
    newEle.appendChild(document.createTextNode(text));
    //creating delete and edit button
    var newDel = document.createElement("button");
    newDel.className = "delete";
    newDel.appendChild(document.createTextNode("Delete Expense"));
    newEle.appendChild(newDel);
    var newEdit = document.createElement("button");
    newEdit.className = "edit";
    newEdit.appendChild(document.createTextNode("Edit Expense"));
    newEle.appendChild(newEdit);
    //console.log(newEle);
    document.getElementById("dest").appendChild(newEle);
}
//DeleteExpense
document.getElementById("dest").addEventListener("click", manipulate);
async function manipulate(e) {
    if (e.target.classList.contains("delete") || e.target.classList.contains("edit")) {
        console.log("delete");
        var parent = e.target.parentElement;
        var key = parent.dataset.key;
        if (e.target.classList.contains("edit")) {
            console.log("edit");
            //get req
            try{
                const result=await axios.get("http://localhost:3000/get-expenses/" + key);
                obj = result.data;
                // console.log(obj);
                price.value = obj.amount;
                desc.value = obj.description;
                cat.value = obj.category;

            }
            catch(err){
                console.log(err);
            }
        }
        //delete req
        try{
            const result= await axios.delete("http://localhost:3000/delete-expenses/" + key)
            console.log("deleted");
                parent.remove();
        }
        catch(err){
            console.log(err);
        }
    }
}