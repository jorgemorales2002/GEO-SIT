<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<title>Geoportal SIG - Municipio de El Alto</title>

<style>

/* BASE */
html, body {
  margin: 0;
  height: 100%;
  font-family: "Segoe UI", Arial, sans-serif;
}

/* HEADER */
header {
  background: #1f4e79;
  color: white;
  padding: 12px 20px;
  display: flex;
  align-items: center;
}

header img {
  height: 50px;
  margin-right: 15px;
}

/* MENU */
nav {
  background: #163a5c;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

nav a {
  color: white;
  padding: 12px 15px;
  text-decoration: none;
  font-weight: bold;
  cursor: pointer;
}

nav a:hover {
  background: #0d2b45;
}

/* SECCIONES */
.section {
  display: none;
  height: calc(100vh - 110px);
}

.active {
  display: block;
}

/* CONTENEDOR */
.container {
  display: flex;
  height: 100%;
}

/* SIDEBAR */
.sidebar {
  width: 260px;
  background: #f4f4f4;
  padding: 15px;
  border-right: 2px solid #ddd;
}

.sidebar h3 {
  color: #1f4e79;
}

/* BOTONES */
.btn {
  background: #1f4e79;
  color: white;
  padding: 10px;
  margin: 8px 0;
  border-radius: 5px;
  cursor: pointer;
}

.btn:hover {
  background: #163a5c;
}

/* VISOR */
.viewer {
  flex: 1;
  height: 100%;
}

iframe {
  width: 100%;
  height: 100%;
  border: none;
}

/* TARJETAS */
.card {
  background: white;
  padding: 20px;
  border-radius: 10px;
  max-width: 800px;
  margin: 20px auto;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
}

</style>
</head>

<body>

<header>
  <img src="logo.png">
  <h2>Geoportal SIG - Municipio de El Alto</h2>
</header>

<nav>
  <a onclick="mostrar('institucion')">Institución</a>
  <a onclick="mostrar('marco')">Marco Legal</a>
  <a onclick="mostrar('geo')">Geovisores</a>
  <a onclick="mostrar('documentos')">Documentación</a>
  <a onclick="mostrar('indicadores')">Indicadores</a>
  <a onclick="mostrar('guia')">Guía Urbana</a>
  <a onclick="mostrar('contacto')">Contacto</a>
</nav>

<!-- INSTITUCION -->
<div id="institucion" class="section active">
  <div class="card">
    <h2>Institución</h2>
    <p>Gestión territorial mediante Sistemas de Información Geográfica.</p>
  </div>
</div>

<!-- MARCO LEGAL -->
<div id="marco" class="section">
  <div class="card">
    <h2>Marco Legal</h2>
    <ul>
      <li>Plan de Ordenamiento Territorial</li>
      <li>Normativa urbana vigente</li>
    </ul>
  </div>
</div>

<!-- GEOVISORES -->
<div id="geo" class="section">
  <div class="container">

    <div class="sidebar">
      <h3>Geovisores</h3>

      <div class="btn" onclick="cargarVisor('RUTA_VISOR_1')">Mapa 1</div>
      <div class="btn" onclick="cargarVisor('RUTA_VISOR_2')">Mapa 2</div>
      <div class="btn" onclick="cargarVisor('RUTA_VISOR_3')">Mapa 3</div>
      <div class="btn" onclick="cargarVisor('RUTA_VISOR_4')">Mapa 4</div>
      <div class="btn" onclick="cargarVisor('RUTA_VISOR_5')">Mapa 5</div>

    </div>

    <div class="viewer">
      <iframe id="visorFrame" src="RUTA_VISOR_1"></iframe>
    </div>

  </div>
</div>

<!-- DOCUMENTOS -->
<div id="documentos" class="section">
  <div class="card">
    <h2>Documentación</h2>
    <p><a href="#">Documento 1</a></p>
    <p><a href="#">Documento 2</a></p>
  </div>
</div>

<!-- INDICADORES -->
<div id="indicadores" class="section">
  <div class="card">
    <h2>Indicadores</h2>
    <p>Indicadores territoriales.</p>
  </div>
</div>

<!-- GUIA URBANA -->
<div id="guia" class="section">
  <div class="container">

    <div class="sidebar">
      <h3>Guía Urbana</h3>
      <div class="btn" onclick="cargarGuia()">Abrir Geovisor</div>
    </div>

    <div class="viewer">
      <iframe id="guiaFrame" src="RUTA_GUIA"></iframe>
    </div>

  </div>
</div>

<!-- CONTACTO -->
<div id="contacto" class="section">
  <div class="card">
    <h2>Contacto</h2>
    <p>Email institucional</p>
  </div>
</div>

<script>

function mostrar(id) {
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

function cargarVisor(ruta) {
  document.getElementById("visorFrame").src = ruta;
}

function cargarGuia() {
  document.getElementById("guiaFrame").src = "guía_urbana/índice.html";
}

</script>

</body>
</html>

