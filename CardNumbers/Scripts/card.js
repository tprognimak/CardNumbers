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
                    alert("Your vendor is JSB");
                    return;
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