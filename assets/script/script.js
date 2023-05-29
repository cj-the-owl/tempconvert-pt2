//Convert Celsius to Fahrenheit
let result1, result2

function celsiusToFahrenheit(celsius) {
    celsius = parseFloat(celsius);
    result1 = celsius * 9/5 + 32;
    return result1;
}

//Convert Fahrenheit to Celsius

function fahrenheitToCelsius(fahrenheit) {
    fahrenheit = parseFloat('fahrenheit')
    result2 = fahrenheit - 32 * 5/9
    return result2
}

//Prompt user for input

let temperature = parseFloat(prompt("Enter the temperature"));
let conversionType = prompt("Choose the conversion type: (Celsius to Fahrenheit or Fahrenheit to Celius)");

if (conversionType.toLowerCase() === "celsius to fahrenheit") {
    alert(celsiusToFahrenheit(temperature))
} else if (conversionType.toLowerCase() === "fahrenheitToCelsius") {
    alert(fahrenheitToCelsius(temperature))
} else {
    alert("Invalid conversion type.")
}

