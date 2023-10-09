const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
const specialChars =["%", "*", "/", "-", "+", "="];
let output = "";

const calculate = (btnvalue) => {
    if (btnValue === "=" && btnvalue !== "") {
        output = eval (output.replace("%", "/100"));
    }else if(btnaValue === "AC"){
        output = ""
    }else if (btnValue === "DE"){
        output = output.toString().slice(0, -1);
    
    }else{
        if(output === "" && specialChars.includes(btnValue)) return;
        output += btnValue;
    }
}

