// Reto 5: Minimo Comun Multiplo 
(function () {
  // Si el mayor no es múltiplo del otro
  // múltiplos del mayor hasta que tambien lo sea del menor.
  function mcm(a, b) {
    let mul = Math.max(a, b);
    const inc = mul;
    while (mul % a !== 0 || mul % b !== 0) {
      mul += inc;
    }
    return mul;
  }

  const boton = document.getElementById("btn-reto-5");
  const salida = document.getElementById("salida-reto-5");
  if (!boton || !salida) return;

  boton.addEventListener("click", () => {
    const a = Number(document.getElementById("num-a-reto-5").value);
    const b = Number(document.getElementById("num-b-reto-5").value);

    if (!Number.isInteger(a) || !Number.isInteger(b) || a < 1 || b < 1) {
      salida.textContent = "Ingresa dos numeros enteros positivos.";
      return;
    }

    const resultado = mcm(a, b);
    salida.innerHTML = `
      mcm(${a}, ${b}) = <strong>${resultado}</strong><br>
      Porque ${resultado} / ${a} = ${resultado / a} y ${resultado} / ${b} = ${resultado / b}
    `;
  });
})();
