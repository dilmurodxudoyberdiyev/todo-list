const todo = [];
const form = document.querySelector(".form");
const inputs = document.querySelectorAll(".input");
const box = document.querySelector(".box")
form.addEventListener("submit",(event)=>{
event.preventDefault();
const user = {};
for(let i of inputs){
    if(!i.value){
        i.style.border = "2px solid red"
    }else{
        i.style.border = ""
        user[i.name] = i.value;
        user.id = todo.length +1;
    }
}
for(let i of inputs){
    i.value = null;
}if(user.id && user.firstName && user.phone){
    todo.push(user)
}
render();
})


function render(){
    box.innerHTML = "";
    todo.forEach((el)=>{
        let ul = document.createElement("ul");
        ul.innerHTML = `
        <li>USER ${el.id}</li>
        <li>${el.firstName}</li>
        <li>${el.phone}</li>
        <li>${el.password}</li>
        `
        box.append(ul);
    })
}

