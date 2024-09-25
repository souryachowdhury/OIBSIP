function convert(){
    var fromUnit = document.getElementById('fromUnit').value;
    var toUnit = document.getElementById('toUnit').value;
    var temperature = parseFloat(document.getElementById('temperature').value);

    var convertedValue;
    var resultUnit;

   
    switch (fromUnit){

        case 'Celsius':
            if (toUnit === 'Fahrenheit'){
                convertedValue = (temperature * 9/5) +32;
                resultUnit = 'Fahrenheit';
            } else if (toUnit === 'Kelvin'){
                convertedValue = temperature + 273.15;
                resultUnit = 'Kelvin';
            }else{
                convertedValue = temperature;
                resultUnit = 'Celsius';
            }
            break;

            case 'Fahrenheit':
            if (toUnit === 'Celsius'){
                convertedValue = (temperature -32) * 5/9;
                resultUnit = 'Celsius';
            } else if (toUnit === 'Kelvin'){
                convertedValue = (temperature -32) * 5/9 + 273.15;
                resultUnit = 'Kelvin';
            }else{
                convertedValue = temperature;
                resultUnit = 'Fahrenheit';
            }
            break;

            case 'Kelvin':
            if (toUnit === 'Celsius'){
                convertedValue = temperature - 273.15;
                resultUnit = 'Celsius';
            } else if (toUnit === 'Kelvin'){
                convertedValue = (temperature - 273.15) * 9/5 +32;
                resultUnit = 'Kelvin';
            }else{
                convertedValue = temperature;
                resultUnit = 'Kelvin';
            }
            break;

    }

    document.getElementById('result').value = convertedValue.toFixed(2) + ' ' + resultUnit;
    
}