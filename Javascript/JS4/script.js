const nameTF = document.getElementById("name");
const rollTF = document.getElementById("roll");
const depTF = document.getElementById("dep");
const submitBtn = document.getElementById("submit");
const table = document.getElementById("table");

submitBtn.addEventListener('click', addRow);

function addRow() {
    const name = nameTF.value.trim();
    const roll = rollTF.value.trim();
    const dep = depTF.value.trim();

    

    const row = document.createElement("tr");
    row.innerHTML = "<td>" + name + "</td><td>" + roll + "</td><td>" + dep + "</td>";
    
    const actionCell=document.createElement("td");
    const Dbtn=document.createElement("button");
    Dbtn.innerText="DELETE";
    actionCell.appendChild(Dbtn);
    row.appendChild(actionCell);
    table.appendChild(row);

    function remove(){
    table.removeChild(row);}
    Dbtn.addEventListener('click',remove);

    nameTF.value = "";
    rollTF.value = "";
    depTF.value = "";

    

    }

    
    
