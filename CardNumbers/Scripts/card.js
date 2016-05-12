$(function () {
    $('#btn-vendor').click(function () {
        debugger;
        var number;
        number = $('#vendor').val();
        var numbers = number.replace(/ /g, '').split('');
        var isValid = isValidFunc(numbers);

        if (isValid) {
            if (numbers[0] == '3') {
                if (numbers[1] == '5') {
                    debugger;
                    var firstNumbers = numbers[0] + numbers[1] + numbers[2]+numbers[3];

                    if (firstNumbers => 3528 && firstNumbers <= 3589) {
                        alert("Your vendor is JSB");
                        return;
                    }
                    else {
                        alert('Your vendo is Undefine');
                        return;
                    }
                    
                }
                else {
                    var firstNumbers = numbers[0] + numbers[1];
                    if (firstNumbers == '34' || firstNumbers == '37') {
                        alert("Your vendor is American Express");
                        return;
                    }
                    else {
                        alert("Your vendor is Undefine");
                        return;
                    }                  
                    
                }

            }

            if (numbers[0] == '4') {
                alert("Your vendor is Visa");
                return;
            }

            if (numbers[0] == '5') {

                var firstNumbers = numbers[0] + numbers[1];

                if (firstNumbers > 50 && firstNumbers < 56) {
                    alert("Your vendor is MasterCard");
                    return;
                }
                else {
                    alert("Your vendor is Maestro");
                    return;
                }
            }

            if (numbers[0] == '6') {
                alert("Your vendor is Maestro");
                return;
            }

            alert("Your vendor is Undefine");
        }
    });

    $('#btn-isValid').click(function () {
        debugger;
        var number;
        number = $('#isValid').val();
        var numbers = number.replace(/ /g, '').split('');
        var isValid = isValidFunc(numbers);

        if (isValid) {
            alert('Your card is valid');
        }
    });

    $('#btn-genNext').click(function () {
        debugger;
        var number;
        number = $('#genNext').val();
        var numbers = number.replace(/ /g, '').split('');
        var isValid = isValidFunc(numbers);

        if (isValid) {
            if (numbers[0] == '3') {
                if (numbers[1] == '5') {
                    debugger;
                    var firstNumbers = numbers[0] + numbers[1] + numbers[2] + numbers[3];

                    if (firstNumbers => 3528 && firstNumbers <= 3589) {
                        $("#jcb").prop("checked", true);
                        return;
                    }
                    else {
                        $("#jcb").prop("checked", true);
                        alert('Your vendo is Undefine. Program will generate random JSB card');
                        return;
                    }

                }
                else {
                    var firstNumbers = numbers[0] + numbers[1];
                    if (firstNumbers == '34' || firstNumbers == '37') {
                        $("#AMEX").prop("checked", true);
                        return;
                    }
                    else {
                        $("#AMEX").prop("checked", true);
                        alert("Your vendor is Undefine. Program will generate random American Express card");
                        return;
                    }

                }

            }

            if (numbers[0] == '4') {
                $("#visa").prop("checked", true);
                return;
            }

            if (numbers[0] == '5') {

                var firstNumbers = numbers[0] + numbers[1];

                if (firstNumbers > 50 && firstNumbers < 56) {
                    $("#master").prop("checked", true);
                    return;
                }
                else {
                    $("#maestro").prop("checked", true);
                    return;
                }
            }

            if (numbers[0] == '6') {
                $("#maestro").prop("checked", true);
                return;
            }
            $("#AMEX").prop("checked", true);
            alert("Your vendor is Undefine. Program will generate random American Express card");
        }
    });




});

function isValidFunc(numbers) {

    if (!numbers.some(isNaN)) {

        if (numbers.length > 12 && numbers.length < 20) {

            var sum = 0;

            if ((numbers.length % 2) == 0) {
                for (var i = 0; i < numbers.length;) {
                    if ((numbers[i] * 2) < 9) {
                        sum += numbers[i] * 2;
                    }
                    else {
                        sum += (numbers[i] * 2) - 9;
                    }
                    i += 2;
                }

                for (var i = 0; i < numbers.length;) {
                    sum += parseInt(numbers[i + 1]);
                    i += 2;
                }
            }

            else {
                for (var i = 1; i < (numbers.length) ;) {
                    if (((numbers[i]) * 2) < 9) {
                        sum += (numbers[i]) * 2;
                    }
                    else {
                        sum += ((numbers[i]) * 2) - 9;
                    }
                    i += 2;
                }

                for (var i = 0; i < (numbers.length) ;) {
                    sum += parseInt(numbers[i]);
                    i += 2;
                }
            }

            if ((sum % 10) == 0) {
                return true;
            }
            else {
                alert('Your card is not valid');
                return false;
            }

        }
        else {
            alert("Incorrect length. Card should have not less than 13 and not more than 19 numbers");
        }
    }
}