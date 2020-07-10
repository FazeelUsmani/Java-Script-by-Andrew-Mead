let convertFahrenheit = function (fahrenheit){
    return{
        fahrenheit: fahrenheit,
        kelvin: (fahrenheit + 459.67) * (5 / 9),
        celsius: (fahrenheit - 32) * (5 / 9)
    }
}

let temp = convertFahrenheit(74)
console.log(temp)