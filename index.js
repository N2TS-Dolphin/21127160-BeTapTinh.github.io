function buttonClick() {
    let x = document.getElementById("num1").value;
    let y = document.getElementById("num2").value;

    if (x === "" || y === "") {
      alert("Vui lòng nhập cả hai số trước khi tính toán.");
      return; // Dừng hàm nếu có một hoặc cả hai ô không được nhập giá trị
    }

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
    else
    {
      alert("Vui lòng chọn 1 phép tính")
      return
    }
  }
