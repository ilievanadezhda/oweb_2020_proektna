function generate() {
    var firstNumber = Math.random();
    var secondNumber = Math.random();
    firstNumber = firstNumber * 10;
    secondNumber = secondNumber * 10;
    firstNumber = Math.round(firstNumber);
    secondNumber = Math.round(secondNumber);
    var sum = new Number();
    sum = firstNumber + secondNumber;
    var komanda = firstNumber + " + " + secondNumber + " = ";
    document.getElementById("suma").innerHTML = komanda;
    return sum;
}

function antiSpam(_broj) {
    if (document.getElementById("result").value != _broj) {
        window.alert("Обидете се повторно!");
    } else {
        window.alert("Успешно испратен feedback! Ви благодарам");
    }
}