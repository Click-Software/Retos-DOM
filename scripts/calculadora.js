// RETO 2: Calculadora simple (Abril Saro Arteaga)
function calcular(a, b, simbolo) {
  if (typeof a !== "number" || typeof b !== "number" || isNaN(a) || isNaN(b)) {
    return null;
  }
  switch (simbolo) {
    case "+": return a + b;
    case "-": return a - b;
    case "*": return a * b;
    case "/": return b === 0 ? null : a / b;
    case "%": return b === 0 ? null : a % b;
    default:  return null;
  }
}

document.getElementById("btn-reto-2")?.addEventListener("click", () => {
  const a = document.getElementById("reto2-num1").valueAsNumber;
  const b = document.getElementById("reto2-num2").valueAsNumber;
  const simbolo = document.getElementById("reto2-op").value;
  const resultado = calcular(a, b, simbolo);

  document.getElementById("salida-reto-2").textContent =
    resultado === null
      ? "Resultado: null (operación no válida)"
      : a + " " + simbolo + " " + b + " = " + resultado;
});
