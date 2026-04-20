let impacto = JSON.parse(localStorage.getItem("impacto"));
let mayor = localStorage.getItem("mayorImpacto");

// Diagnóstico principal
document.getElementById("main-impact").innerHTML = `
<h2>Impacto Principal: ${mayor.toUpperCase()}</h2>
<p>Esta es el área donde tus hábitos diarios tienen el mayor impacto ambiental.</p>
`;

// 📊 Barras
let barsHTML = "";

for (let categoria in impacto) {
    barsHTML += `
    <div class="bar" style="width:${impacto[categoria] * 10}%">
        ${categoria}: ${impacto[categoria]}
    </div>
    `;
}

document.getElementById("bars").innerHTML = barsHTML;

// 🧠 Explicaciones + imágenes
let science = "";

if (mayor === "atmosfera") {
    science = `
    <h2>🌫️ Impacto Atmosférico</h2>
    <img src="https://images.unsplash.com/photo-1509395176047-4a66953fd231" width="100%">
    <p>
    Tus hábitos aumentan los gases de efecto invernadero como el CO₂. Estos gases atrapan el calor en la atmósfera,
    un proceso conocido como efecto invernadero, lo que conduce al calentamiento global.
    </p>
    <ul>
        <li>Reduce el uso de vehículos</li>
        <li>Apaga los dispositivos que no uses</li>
        <li>Evita quemar basura</li>
    </ul>
    `;
}

if (mayor === "agua") {
    science = `
    <h2>💧 Impacto en el Agua</h2>
    <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb" width="100%">
    <p>
    La contaminación del agua puede causar eutrofización, donde el exceso de nutrientes provoca el crecimiento de algas,
    reduciendo el oxígeno y matando la vida acuática.
    </p>
    <ul>
        <li>Ahorra agua</li>
        <li>Evita tirar químicos</li>
    </ul>
    `;
}

if (mayor === "ecosistema") {
    science = `
    <h2>🌱 Impacto en el Ecosistema</h2>
    <img src="https://images.unsplash.com/photo-1470770841072-f978cf4d019e" width="100%">
    <p>
    Tus hábitos afectan la biodiversidad. Actividades como la deforestación y el alto consumo de carne
    aumentan el CO₂ y destruyen los hábitats naturales.
    </p>
    <ul>
        <li>Reduce el consumo de carne</li>
        <li>Apoya productos sostenibles</li>
    </ul>
    `;
}

if (mayor === "residuos") {
    science = `
    <h2>🗑️ Impacto de los Residuos</h2>
    <img src="https://images.unsplash.com/photo-1528323273322-d81458248d40" width="100%">
    <p>
    La contaminación por plásticos genera microplásticos que entran en la cadena alimentaria
    y afectan los ecosistemas y la salud humana.
    </p>
    <ul>
        <li>Reduce el uso de plástico</li>
        <li>Recicla correctamente</li>
    </ul>
    `;
}

document.getElementById("science").innerHTML = science;