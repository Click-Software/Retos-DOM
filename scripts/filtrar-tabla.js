// RETO 3: Filtrado de tablas (Natalia Jaquelin Sánchez Morales)
function filterTable() {
  const input = document.getElementById("filtro");
  const busqueda = input ? input.value.toLowerCase().trim() : "";
  const filas = document.querySelectorAll("#tabla tbody tr");

  filas.forEach((fila) => {
    const textoFila = fila.textContent.toLowerCase();
    // Si la fila contiene el texto buscado, se muestra; de lo contrario, se oculta
    if (textoFila.includes(busqueda)) {
      fila.style.display = "";
    } else {
      fila.style.display = "none";
    }
  });
}

// Ejecuta la función a medida que el usuario va tecleando
document.getElementById("filtro")?.addEventListener("input", filterTable);
