// Obtener los elementos de entrada
let num1Input = document.getElementById("num1");
let num2Input = document.getElementById("num2");
let resultOutput = document.getElementById("resultado");

// Función para calcular la suma y mostrar el resultado
function sumar() {
    // Obtener los valores como números
    let num1 = parseFloat(num1Input.value);
    let num2 = parseFloat(num2Input.value);

    // Calcular la suma
    let result = num1 + num2;

    // Mostrar el resultado en el elemento de salida
    if (num1Input.value !== '' && num2Input.value !=='') {
        resultOutput.innerHTML = `<input class="form-control" type="text" value="${result}" aria-label="readonly input example" readonly>`;
    }

}

// Llamar a la función sumar cuando se produzca un cambio en los números
num1Input.addEventListener("input", sumar);
num2Input.addEventListener("input", sumar);