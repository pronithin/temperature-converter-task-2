document.getElementById("celsius").addEventListener("input", function() {
    // Get the Celsius value
    var celsius = parseFloat(document.getElementById("celsius").value);

    // Convert Celsius to Fahrenheit and Kelvin
    var fahrenheit = (celsius * 9/5) + 32;
    var kelvin = celsius + 273.15;

    // Update the Fahrenheit and Kelvin input fields
    document.getElementById("fahrenheit").value = fahrenheit.toFixed(2);
    document.getElementById("kelvin").value = kelvin.toFixed(2);
});
