function analizar() {

    // Obtener valores
    let transporte = document.getElementById("transporte").value;
    let energia = document.getElementById("energia").value;
    let quema = document.getElementById("quema").value;
    let plastico = document.getElementById("plastico").value;
    let reciclaje = document.getElementById("reciclaje").value;
    let comida = document.getElementById("comida").value;
    let agua = document.getElementById("agua").value;
    let quimicos = document.getElementById("quimicos").value;

    // Sistema de impacto
    let impacto = {
        atmosfera: 0,
        residuos: 0,
        ecosistema: 0,
        agua: 0
    };

    // Función para convertir valores a puntos
    function puntos(valor) {
        if (valor === "alto") return 3;
        if (valor === "medio") return 2;
        return 1;
    }

    // ATMÓSFERA
    impacto.atmosfera += puntos(transporte);
    impacto.atmosfera += puntos(energia);
    impacto.atmosfera += puntos(quema);

    // RESIDUOS
    impacto.residuos += puntos(plastico);
    impacto.residuos += (4 - puntos(reciclaje)); // reciclar reduce impacto

    // ECOSISTEMA
    impacto.ecosistema += puntos(comida);

    // AGUA
    impacto.agua += puntos(agua);
    impacto.agua += puntos(quimicos);

    // Determinar mayor impacto
    let categorias = Object.keys(impacto);
    let mayor = categorias.reduce((a, b) => impacto[a] > impacto[b] ? a : b);

    // Guardar datos
    localStorage.setItem("impacto", JSON.stringify(impacto));
    localStorage.setItem("mayorImpacto", mayor);

    // Redirigir
    window.location.href = "resultado.html";
}