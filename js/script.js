

window.onload = function() {
    document.querySelector(".calculator").onsubmit = function() {
        let value1 = this.querySelector("#number-1").value;
        let value2 = this.querySelector("#number-2").value;
        let operation = this.querySelector("#operation").value;
        let result = 0;
        let resultElem = document.querySelector(".calculator__result-number");
        if(operation == "+") result = Number(value1) + Number(value2);
        else if(operation == "-") result = Number(value1) - Number(value2);
        else if(operation == "/") result = Number(value1) / Number(value2);
        else if(operation == "*") result = Number(value1) * Number(value2);
        resultElem.innerHTML = Math.round(result);
    }
    $('.calculator__operation').selectric();
}