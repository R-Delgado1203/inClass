var input1 = "";
var input2 = "";
var operator = "";
var result = "";

function clear() {
    input1 = "";
    input2 = "";
    operator = "";
    result = "";

    $(".input1, .input2, .operator, .result").empty();

}

function numberClick() {
    var value = $(this).val();

    if (result !== "") {
        return;
    }

    if (operator === "") {
        input1 += value;
        $(".input1").text(input1);
    }
    else {
        input2 += value;
        $(".input2").text(input2);
    }

}

function operatorClick() {
    if (input1 === "" || input2 !== "") {
        return;
    }
    else {
        operator = $(this).val();
        $(".operator").text($(this).text());
    }

}

function equalsClick() {
    if (input1 === "" || operator === "" || input2 === "") {
        return;
    }

    if (result !== "") {
        return;
    }

    var number1 = parseInt(input1);
    var number2 = parseInt(input2);

    var total = 0;

    switch (operator) {
        case "add":
            total = number1 + number2;
            break;
        case "multiply":
            total = number1 * number2;
            break;
        case "minus":
            total = number1 - number2;
            break;
        case "divide":
            total = number1 / number2;
            break;
        case "power":
            total = Math.pow(number1, number2);
            break;
    }

    result += total;
    $(".result").text(result);
}




$(document).ready(function () {
    $(".btn-num").on("click", numberClick);
    $(".btn-clear").on("click", clear);
    $(".btn-op").on("click", operatorClick);
    $(".btn-equal").on("click", equalsClick);

    clear();
})