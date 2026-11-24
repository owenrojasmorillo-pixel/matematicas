// Guarda la gráfica de GeoGebra para cambiarla sin recargar la página.
let appletGeoGebra = null;

// Carga GeoGebra y dibuja f(x) = bx + c.
function iniciarGeoGebra(b, c) {
    if (typeof GGBApplet === "undefined") {
        setTimeout(() => iniciarGeoGebra(b, c), 100);
        return;
    }

    const opciones = {
        appName: "classic",
        width: 610,
        height: 420,
        showToolBar: false,
        showAlgebraInput: false,
        showMenuBar: false,
        borderColor: "#48c6ef",
        appletOnLoad: function () {
            appletGeoGebra = window.ggbApplet;
            appletGeoGebra.setCoordSystem(-10, 10, -10, 10);
            appletGeoGebra.evalCommand("b = " + b);
            appletGeoGebra.evalCommand("c = " + c);
            appletGeoGebra.evalCommand("f(x) = b*x+c");
            appletGeoGebra.setColor("f", 0, 90, 180);
        }
    };

    new GGBApplet(opciones, true).inject("geogebra-applet");
}

// Genera b y c, clasifica la función y cambia la gráfica.
function generar() {
    const b = Math.floor(Math.random() * 7) - 3;
    const c = Math.floor(Math.random() * 7) - 3;

    document.getElementById("b").textContent = "[ " + b + " ]";
    document.getElementById("c").textContent = "[ " + c + " ]";

    // Crea el texto de la fórmula con el signo correcto.
    let formula = "f(x) = " + b + "x";
    if (c > 0) formula += " + " + c;
    if (c < 0) formula += " - " + Math.abs(c);

    // Quita el resaltado anterior de todas las tarjetas.
    document.querySelectorAll(".resultado").forEach((tarjeta) => {
        tarjeta.classList.remove("activa");
    });

    // Cambia el contenido según la clasificación.
    if (b === 0) {
        document.getElementById("tarjeta-constante").classList.add("activa");
        document.getElementById("constante").innerHTML =
            "Es una función constante.<br>Su fórmula es f(x) = " + c +
            ".<br>Su gráfica es una línea horizontal.";
    } else if (c === 0) {
        document.getElementById("tarjeta-lineal").classList.add("activa");
        document.getElementById("lineal").innerHTML =
            "Es una función lineal.<br>Su fórmula es " + formula +
            ".<br>Pasa por el origen (0, 0).";
    } else {
        document.getElementById("tarjeta-afin").classList.add("activa");
        document.getElementById("afin").innerHTML =
            "Es una función afín.<br>Su fórmula es " + formula +
            ".<br>Corta al eje Y en (0, " + c + ").";
    }

    // Actualiza la gráfica si ya se cargó GeoGebra.
    if (appletGeoGebra) {
        appletGeoGebra.setValue("b", b);
        appletGeoGebra.setValue("c", c);
    }
}

// Ejecuta el programa cuando termina de cargar el documento.
document.addEventListener("DOMContentLoaded", () => {
    generar();

    const b = Number(document.getElementById("b").textContent.match(/-?\d+/)[0]);
    const c = Number(document.getElementById("c").textContent.match(/-?\d+/)[0]);
    iniciarGeoGebra(b, c);
});
