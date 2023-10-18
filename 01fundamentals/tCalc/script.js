
const displayerTop = document.getElementById('display-Top');
const displayerMiddle = document.getElementById('display-Middle');
const displayer = document.getElementById('display');


const operate = () => {
    op1 = displayerTop.textContent;
    operation = displayerMiddle.textContent;
    op2 = displayer.textContent;
    // displayerTop.textContent = op1 + " " + operation + " " + op2;
    // displayerMiddle.textContent = " = ";    
    switch (operation) {
        case "+":
            displayerTop.textContent = parseInt(op1) + parseInt(op2);
            break
        case "-":
            displayerTop.textContent = parseInt(op1) - parseInt(op2);
            break
        case "X":
            displayerTop.textContent = parseInt(op1) * parseInt(op2);
            break
        case "/":
            displayerTop.textContent = parseInt(op1) / parseInt(op2);
            break
    }
    displayerMiddle.textContent = ""; 
    displayer.textContent = ""; 
}
// console.log(operate(2, "somar", 3));

const limpaDisplay = () => {
    displayer.textContent = "";
    displayerTop.textContent = "";
    displayerMiddle.textContent = "";
}

const consultaDisplay = () => {
    if ( displayer.textContent != "" &&
         displayerTop.textContent != "" &&
         displayerMiddle.textContent != "") {
        return true
    }
}

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    // and for each one we add a 'click' listener
    button.addEventListener('click', () => {
        if (parseInt(button.id) >= 0 && parseInt(button.id) <= 9) {
            if ( consultaDisplay() ) {
                limpaDisplay();
            }
            displayer.textContent += button.id;
            console.log(typeof button.id, button.id);
        }
        if (button.id == "c") {
            limpaDisplay();
        }
        if (button.id == "somar") {
            if ( consultaDisplay() ) {
                    operate();
            }
            if (displayerTop.textContent == "") {
                displayerTop.textContent = displayer.textContent;
                displayer.textContent = "";
            }
            displayerMiddle.textContent = "+";
        }
        if (button.id == "diminuir") {
            if ( consultaDisplay() ) {
                    operate();
            }
            if (displayerTop.textContent == "") {
                displayerTop.textContent = displayer.textContent;
                displayer.textContent = "";
            }
            displayerMiddle.textContent = "-";
        }
        if (button.id == "multiplicar") {
            if ( consultaDisplay() ) {
                    operate();
            }
            if (displayerTop.textContent == "") {
                displayerTop.textContent = displayer.textContent;
                displayer.textContent = "";
            }
            displayerMiddle.textContent = "X";
        }
        if (button.id == "dividir") {
            if ( consultaDisplay() ) {
                    operate();
            }
            if (displayerTop.textContent == "") {
                displayerTop.textContent = displayer.textContent;
                displayer.textContent = "";
            }
            displayerMiddle.textContent = "/";
        }
        if (button.id == "igual") {
            displayer.textContent = operate();
        }
    });
});
