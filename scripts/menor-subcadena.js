// Función que encuentra la menor subcadena de palabra que contiene todos los caracteres de muestra
function menorSubcadena(muestra, palabra) {
  // Verifica si un trozo contiene todas las letras de la muestra
  function tieneTodas(trozo, muestra) {
    let copia = trozo;
    for (const letra of muestra) {
      if (!copia.includes(letra)) return false;
      copia = copia.replace(letra, '');
    }
    return true;
  }

  // Recorre la palabra de menor a mayor tamaño
  for (let tam = muestra.length; tam <= palabra.length; tam++) {
    for (let i = 0; i <= palabra.length - tam; i++) {
      const trozo = palabra.slice(i, i + tam);
      if (tieneTodas(trozo, muestra)) {
        return trozo; // Devuelve la primera coincidencia más corta
      }
    }
  }

  return '';
}

// Conexión con el botón y la pantalla (DOM)
document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('btn-reto-1');
  const inputPalabra = document.getElementById('input-palabra-1');
  const inputMuestra = document.getElementById('input-muestra-1');
  const salida = document.getElementById('salida-reto-1');

  btn?.addEventListener('click', () => {
    const palabra = inputPalabra.value.trim();
    const muestra = inputMuestra.value.trim();

    if (!palabra || !muestra) {
      salida.textContent = 'Por favor ingresa tanto la palabra como la muestra.';
      return;
    }

    const resultado = menorSubcadena(muestra, palabra);

    if (resultado) {
      salida.innerHTML = `<strong>Resultado:</strong> "${resultado}" <br><small>Longitud: ${resultado.length} caracteres</small>`;
    } else {
      salida.textContent = `No se encontró ninguna subcadena que contenga "${muestra}".`;
    }
  });
});
