const inputBox = document.getElementById("input-box");
const container = document.getElementById("container");
function addtask(){
    if(inputBox.value == ''){
        alert("HUWAG KANG TAMAD!")
    }
    else{
        let li = document.createElement("li")
        li.innerHTML = inputBox.value
        

        let removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.onclick = function() {
            container.removeChild(li);
        };
        

        li.appendChild(removeButton);
        
        container.appendChild(li);
    }
    inputBox.value = ''; 
}

