// RETO 3: Filtrado de tablas (Natalia Jaquelin Sánchez Morales)
(function () {
  const personas = [
    { nombre: "Juan", edad: 25, ciudad: "Madrid" },
    { nombre: "Ana", edad: 30, ciudad: "Barcelona" },
    { nombre: "Jose", edad: 32, ciudad: "Granada" },
    { nombre: "Pedro", edad: 35, ciudad: "Valencia" },
    { nombre: "Lucía", edad: 28, ciudad: "Sevilla" }
  ];

  const filtro = document.getElementById("filtro");
  const columna = document.getElementById("columna");
  const contador = document.getElementById("contador");
  const mensaje = document.getElementById("mensaje");
  const error = document.getElementById("error");
  const tbody = document.querySelector("#tabla tbody");

  if (!filtro || !tbody) return;

  function normalizar(texto) {
    return texto.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").trim();
  }

  function crearFila(p) {
    const tr = document.createElement("tr");
    [p.nombre, p.edad, p.ciudad].forEach(function (valor) {
      const td = document.createElement("td");
      td.textContent = valor;
      tr.appendChild(td);
    });
    const tdAccion = document.createElement("td");
    const btn = document.createElement("button");
    btn.textContent = "Eliminar";
    btn.addEventListener("click", function () {
      tr.remove();
      filterTable();
    });
    tdAccion.appendChild(btn);
    tr.appendChild(tdAccion);
    tbody.appendChild(tr);
  }

  function filterTable() {
    const busqueda = normalizar(filtro.value);
    const col = parseInt(columna.value);
    const filas = tbody.querySelectorAll("tr");
    let visibles = 0;

    filas.forEach(function (fila) {
      const celdas = Array.from(fila.cells).slice(0, 3);
      const texto = col === -1
        ? celdas.map(c => c.textContent).join(" ")
        : celdas[col].textContent;
      const coincide = normalizar(texto).includes(busqueda);
      fila.style.display = coincide ? "" : "none";
      if (coincide) visibles++;
    });

    if (contador) contador.textContent = "Mostrando " + visibles + " de " + filas.length;
    if (mensaje) mensaje.textContent = (filas.length > 0 && visibles === 0) ? "No hay coincidencias." : "";
  }

  function agregarPersona() {
    const nombre = document.getElementById("nNombre").value.trim();
    const edad = parseInt(document.getElementById("nEdad").value);
    const ciudad = document.getElementById("nCiudad").value.trim();

    if (nombre === "" || ciudad === "" || isNaN(edad) || edad <= 0) {
      if (error) error.textContent = "Completa nombre, ciudad y una edad mayor a 0.";
      return;
    }
    if (error) error.textContent = "";
    crearFila({ nombre: nombre, edad: edad, ciudad: ciudad });
    document.getElementById("nNombre").value = "";
    document.getElementById("nEdad").value = "";
    document.getElementById("nCiudad").value = "";
    filterTable();
  }

  filtro.addEventListener("input", filterTable);
  columna.addEventListener("change", filterTable);
  document.getElementById("limpiar")?.addEventListener("click", function () {
    filtro.value = "";
    columna.value = "-1";
    filterTable();
  });
  document.getElementById("agregar")?.addEventListener("click", agregarPersona);

  personas.forEach(crearFila);
  filterTable();
})();
