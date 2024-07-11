const calcBody = document.querySelector(".calcBody");
const input = document.querySelector("input")
let num1 = '';
let num2 = 0;
let oper = "";
const operate = function(num1,num2,oper){
    switch(oper){
        case "+":
            return total = num1 + num2;
            break;
        case "-":
            return total = num1 - num2;
            break;
        case "*":
            return total = num1 * num2;
            break;
        case "/":
            return total = num1 / num2;
            break;
    }
};



calcBody.addEventListener('click',(e)=>{
    let target = e.target;
    switch(target.id){
        case 'btn1':
            input.value = input.value+"1";
            break;
        case 'btn2':
            input.value = input.value+"2";
            break;
        case 'btn3':
            input.value = input.value+"3";
            break;
        case 'btn4':
            input.value = input.value+"4";
            break;
        case 'btn5':
            input.value = input.value+"5";
            break;
        case 'btn6':
            input.value = input.value+"6";
            break;
        case 'btn7':
            input.value = input.value+"7";
            break;
        case 'btn8':
            input.value = input.value+"8";
            break;
        case 'btn9':
            input.value = input.value+"9";
            break;
        case 'btn0':
            if(input.value == 0){
                return;
            }
            else{
                input.value = input.value+"0";
            }
            break;   
        case 'btnDec':
            if(input.value.includes(".")){
                return;
            }
            else{
                input.value = input.value+".";
            }
            break;
        case 'btnAdd':
            if(!num1){
                num1 = parseFloat(input.value);
                oper = "+";
                input.value = '';
            }
            else{
                num2 = parseFloat(input.value);
                operate(num1,num2,oper);
                num1=total;
                oper = "+";
                input.value = '';
            }
            break;
        case 'btnSub':
            if(!num1){
                num1 = parseFloat(input.value);
                oper = "-";
                input.value = '';
            }
            else{
                num2 = parseFloat(input.value);
                operate(num1,num2,oper);
                num1=total;
                oper = "-";
                input.value = '';
            }
            break;
        case 'btnMulti':
            if(!num1){
                num1 = parseFloat(input.value);
                oper = "*";
                input.value = '';
            }
            else{
                num2 = parseFloat(input.value);
                operate(num1,num2,oper);
                num1=total;
                oper = "*";
                input.value = '';
            }
            break;
        case 'btnDivide':
            if(!num1){
                num1 = parseFloat(input.value);
                oper = "/";
                input.value = '';
            }
            else{
                num2 = parseFloat(input.value);
                if(num2 === 0){
                    alert("Can't divide by zero dumbass.");
                    num1='';
                    num2='';
                    oper='';
                }
                operate(num1,num2,oper);
                num1=total;
                oper = "/";
                input.value = '';
            }
            break;
        case 'btnEqual':
            if(!num1){
                input.value = input.value;
            }
            else{
                num2 = parseFloat(input.value);
                if(num2 === 0 && oper === "/"){
                    alert("Can't divide by zero dumbass.");
                    num1='';
                    num2='';
                    oper='';
                }
                else{
                    operate(num1,num2,oper);
                    input.value = total;
                    num1= '';
                    oper = '';
                    num2 = '';
                }
            }
            break;
        case 'btnAllClear':
            input.value = '';
            num1 = '';
            oper = '';
            break;
    }
});