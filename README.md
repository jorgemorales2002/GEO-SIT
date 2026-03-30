<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<title>Geoportal SIG - Municipio de El Alto</title>

<style>

/* RESET */
body {
  margin: 0;
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
}

nav a:hover {
  background: #0d2b45;
}

/* CONTENEDOR PRINCIPAL */
.container {
  display: flex;
  height: calc(100vh - 110px);
}

/* PANEL LATERAL */
.sidebar {
  width: 280px;
  background: #f4f4f4;
  padding: 15px;
  overflow-y: auto;
  border-right: 2px solid #ddd;
}

.sidebar h3 {
  color: #1f4e79;
}

/* BOTONES */
.btn {
  display: block;
  background: #1f4e79;
  color: white;
  padding: 10px;
  margin: 8px 0;
  text-align: left;
  border-radius: 5px;
  cursor: pointer;
}

.btn:hover {
  background: #163a5c;
}

/* VISOR */
.viewer {
  flex: 1;
}

iframe {
  width: 100%;
  height: 100%;
  border: none;
}

/* SECCIONES */
.section {
  display: none;
  padding: 20px;
}

.active {
  display: block;
}

.card {
  background: white;
  padding: 20px;
  border-radius: 10px;
  max-width: 800px;
  margin: auto;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
}

</style>
</head>

<body>

<header>
  <img src="logo.png">
  <h2>Geoportal SIG - Gobierno Autónomo Municipal de El Alto</h2>
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
    <p>El Gobierno Autónomo Municipal de El Alto utiliza herramientas SIG para la planificación territorial, gestión urbana y toma de decisiones estratégicas.</p>
  </div>
</div>

<!-- MARCO LEGAL -->
<div id="marco" class="section">
  <div class="card">
    <h2>Marco Legal</h2>
    <ul>
      <li>Plan de Ordenamiento Territorial (POT)</li>
      <li>Ley de Autonomías</li>
      <li>Normativa urbana vigente</li>
    </ul>
  </div>
</div>

<!-- GEOVISORES -->
<div id="geo" class="section">
  <div class="container">

    <div class="sidebar">
      <h3>Geovisores</h3>

      <div class="btn" onclick="cargarVisor('visor1/index.html')">Mapa General</div>
      <div class="btn" onclick="cargarVisor('visor2/index.html')">Uso de Suelo</div>
      <div class="btn" onclick="cargarVisor('visor3/index.html')">Zonificación</div>
      <div class="btn" onclick="cargarVisor('visor4/index.html')">Equipamientos</div>
      <div class="btn" onclick="cargarVisor('visor5/index.html')">Riesgos</div>

    </div>

    <div class="viewer">
      <iframe id="visorFrame" src="visor1/index.html"></iframe>
    </div>

  </div>
</div>

<!-- DOCUMENTOS -->
<div id="documentos" class="section">
  <div class="card">
    <h2>Documentación</h2>
    <p><a href="#">Reglamento POT</a></p>
    <p><a href="#">Cartilla Uso de Suelo</a></p>
  </div>
</div>

<!-- INDICADORES -->
<div id="indicadores" class="section">
  <div class="card">
    <h2>Indicadores</h2>
    <p>Indicadores urbanos y territoriales.</p>
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
      <iframe id="guiaFrame" src="guia_urbana/index.html"></iframe>
    </div>

  </div>
</div>

<!-- CONTACTO -->
<div id="contacto" class="section">
  <div class="card">
    <h2>Contacto</h2>
    <p>Email: contacto@elalto.gob.bo</p>
  </div>
</div>

<script>

/* CAMBIAR SECCIONES */
function mostrar(id) {
  let secciones = document.querySelectorAll('.section');
  secciones.forEach(sec => sec.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

/* CAMBIAR VISOR */
function cargarVisor(ruta) {
  document.getElementById("visorFrame").src = ruta;
}

/* GUIA URBANA */
function cargarGuia() {
  document.getElementById("guiaFrame").src = "guia_urbana/index.html";
}

</script>

</body>
</html>
