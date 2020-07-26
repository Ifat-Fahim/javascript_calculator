let output = document.getElementById("output");
const buttons = document.querySelectorAll("button");
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function (event) {
        let buttonText = event.target.innerText;
        if (buttonText == "x") {
            buttonText = "*";
            output.innerText += buttonText;
        } else if (buttonText == "AC") {
            output.innerText = "";
        } else if (buttonText == "=") {
            output.innerText = eval(output.innerText);
        } else {
            output.innerText += buttonText;
        }
    });
}
