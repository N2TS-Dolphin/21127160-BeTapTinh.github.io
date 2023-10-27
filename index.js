function buttonClick() {
    let x = document.getElementById("num1").value;
    let y = document.getElementById("num2").value;

    checkPlus = document.getElementById("Plus");
    checkMinus = document.getElementById("Minus");
    checkMultiply = document.getElementById("Multiply");
    checkDivide = document.getElementById("Divide");

    if (checkPlus.checked) {
      document.getElementById("result").innerHTML = Number(x) + Number(y);
    }
    else if (checkMinus.checked) {
      document.getElementById("result").innerHTML = Number(x) - Number(y);
    }
    else if (checkMultiply.checked) {
      document.getElementById("result").innerHTML = Number(x) * Number(y);
    }
    else if (checkDivide.checked) {
      document.getElementById("result").innerHTML = Number(x) / Number(y);
    }
  }

  checkButton = document.getElementById("button");
  checkButton.addEventListener('click', buttonClick);
