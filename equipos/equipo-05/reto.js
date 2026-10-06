function calcular(a, b, simbolo) {
  // Si algún argumento no es un número válido, devuelve null
  if (typeof a !== "number" || typeof b !== "number" || isNaN(a) || isNaN(b)) {
    return null;
  }

  switch (simbolo) {
    case "+": return a + b;
    case "-": return a - b;
    case "*": return a * b;
    case "/": return b === 0 ? null : a / b;
    case "%": return b === 0 ? null : a % b;
    default:  return null; // símbolo no reconocido
  }
}

// Conexión con la interfaz
const boton = document.getElementById("calcular");
const resultado = document.getElementById("resultado");

boton.addEventListener("click", () => {
  const a = document.getElementById("num1").valueAsNumber;
  const b = document.getElementById("num2").valueAsNumber;
  const simbolo = document.getElementById("operacion").value;

  const r = calcular(a, b, simbolo);
  resultado.textContent = r === null ? "null (operación no válida)" : r;
});
