<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<title>SISTEMA DE INFORMACION TERRITORRIAL</title>

<style>

/* ===== BASE ===== */
body {
  margin: 0;
  font-family: "Segoe UI", Arial;
  background: #f4f6f9;
}

/* ===== HEADER ===== */
header {
  background: linear-gradient(90deg, #b71c1c, #7f0000);
  color: white;
  padding: 15px 25px;
  display: flex;
  align-items: center;
  box-shadow: 0 2px 5px rgba(0,0,0,0.2);
}

header img {
  height: 50px;
  margin-right: 15px;
}

header h2 {
  margin: 0;
}

/* ===== MENU ===== */
nav {
  background: #8e0000;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

nav a {
  color: white;
  padding: 14px 18px;
  text-decoration: none;
  font-weight: bold;
  transition: 0.3s;
}

nav a:hover {
  background: #5f0000;
}

/* ===== SECCIONES ===== */
.section {
  display: none;
  height: calc(100vh - 120px);
}

.active {
  display: block;
}

/* ===== CONTENEDOR ===== */
.container {
  display: flex;
  height: 100%;
}

/* ===== SIDEBAR ===== */
.sidebar {
  width: 270px;
  background: white;
  padding: 20px;
  border-right: 1px solid #ddd;
  box-shadow: 2px 0 5px rgba(0,0,0,0.05);
}

.sidebar h3 {
  color: #b71c1c;
}

/* ===== BOTONES ===== */
.btn {
  background: linear-gradient(45deg, #d32f2f, #9a0007);
  color: white;
  padding: 12px;
  margin: 10px 0;
  border-radius: 6px;
  cursor: pointer;
  text-align: center;
  transition: 0.3s;
  font-weight: bold;
}

.btn:hover {
  transform: scale(1.05);
}

/* ===== VISOR ===== */
.viewer {
  flex: 1;
}

iframe {
  width: 100%;
  height: 100%;
  border: none;
}

/* ===== TARJETAS ===== */
.card {
  background: white;
  padding: 25px;
  border-radius: 12px;
  max-width: 900px;
  margin: 30px auto;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
  border-top: 6px solid #b71c1c;
}

/* ===== LINKS ===== */
a {
  color: #b71c1c;
}

</style>
</head>

<body>

<header>
  <img src="logo.png">
  <h2>SISTEMA DE INFORMACION TERRITORRIAL</h2>
</header>

<nav>
  <a onclick="mostrar('institucion')">Institución</a>
  <a onclick="mostrar('marco')">Marco Legal</a>
  <a onclick="mostrar('geo')">Geovisores</a>
  <a onclick="mostrar('documentos')">Documentación</a>
  <a onclick="mostrar('mapas')">Mapas</a>
  <a onclick="mostrar('indicadores')">Indicadores</a>
  <a onclick="mostrar('guia')">Guía Urbana</a>
  <a onclick="mostrar('contacto')">Contacto</a>
</nav>

<!-- INSTITUCION -->
<div id="institucion" class="section active">
  <div class="card">
    <h2>Institución</h2>
    <p>Plataforma oficial de gestión territorial basada en Sistemas de Información Geográfica (SIG).</p>
  </div>
</div>

<!-- MARCO -->
<div id="marco" class="section">
  <div class="card">
    <h2>Marco Legal</h2>
    <ul>
      <li>Plan de Ordenamiento Territorial (POT)</li>
      <li>Normativa urbana vigente</li>
    </ul>
  </div>
</div>

<!-- GEOVISORES -->
<div id="geo" class="section">
  <div class="container">

    <div class="sidebar">
      <h3>Geovisores</h3>

      <div class="btn" onclick="cargarVisor('visor1/index.html')">Mapa Base</div>
      <div class="btn" onclick="cargarVisor('visor2/index.html')">Uso de Suelo</div>
      <div class="btn" onclick="cargarVisor('visor3/index.html')">Zonificación</div>
      <div class="btn" onclick="cargarVisor('visor4/index.html')">Equipamientos</div>
      <div class="btn" onclick="cargarVisor('visor5/index.html')">Riesgos</div>

    </div>

    <div class="viewer">
      <iframe id="visorFrame"></iframe>
    </div>

  </div>
</div>

<!-- DOCUMENTOS -->
<div id="documentos" class="section">
  <div class="card">
    <h2>Documentación</h2>
    <p><a href="#">📄 Documento 1</a></p>
    <p><a href="#">📄 Documento 2</a></p>
  </div>
</div>

<!-- Mapas -->
<div id="Mapas" class="section">
  <div class="card">
    <h2>Mapas</h2>
    </ul>
      <li>Crecimiento historico</li>
      <li>Proteccion</li>
      <li>Restriccion</li>
    </ul>
  </div>
</div>

<!-- INDICADORES -->
<div id="indicadores" class="section">
  <div class="card">
    <h2>Indicadores</h2>
    <p>Visualización de indicadores territoriales y urbanos.</p>
  </div>
</div>

<!-- GUIA -->
<div id="guia" class="section">
  <div class="container">

    <div class="sidebar">
      <h3>Guía Urbana</h3>
      <div class="btn" onclick="cargarGuia()">Abrir Guía</div>
    </div>

    <div class="viewer">
      <iframe id="guiaFrame"></iframe>
    </div>

  </div>
</div>

<!-- CONTACTO -->
<div id="contacto" class="section">
  <div class="card">
    <h2>Contacto</h2>
    <p>Email institucional: contacto@municipio.gob.bo</p>
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
  document.getElementById("guiaFrame").src = "guia_urbana/index.html";
}

</script>

</body>
</html>
