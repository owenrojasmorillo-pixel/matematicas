function generar() {
    let b = Math.floor(Math.random() * 21) - 10;
    let c = Math.floor(Math.random() * 21) - 10;

    document.getElementById("b").textContent = "[ " + b + " ]";
    document.getElementById("c").textContent = "[ " + c + " ]";

    let formula = "f(x) = " + b + "x";
    if (c > 0) {
        formula += " + " + c;
    }
    if (c < 0) {
        formula += " - " + (c * -1);
    }

    let comportamiento = "La función es constante porque b = 0.";
    if (b > 0) {
        comportamiento = "La función es creciente porque b es positivo.";
    } else if (b < 0) {
        comportamiento = "La función es decreciente porque b es negativo.";
    }

    if (c === 0) {
        document.getElementById("lineal").innerHTML =
            "Es una función lineal.<br>" +
            "Pasa por el origen (0, 0).<br>" +
            "Su fórmula es " + formula + ".<br>" +
            comportamiento;
        document.getElementById("afin").textContent =
            "Muestra la lista de propiedades de la Función Afín si cumple la condición (c ≠ 0).";
    } else {
        document.getElementById("afin").innerHTML =
            "Es una función afín.<br>" +
            "Su fórmula es " + formula + ".<br>" +
            "Corta el eje Y en (0, " + c + ").<br>" +
            "La pendiente es b = " + b + ".<br>" +
            comportamiento + "<br>" +
            "Es una traslación vertical de f(x) = " + b + "x.";
        document.getElementById("lineal").textContent =
            "Muestra la lista de propiedades de la Función Lineal si cumple la condición (c = 0).";
    }
}

document.addEventListener("DOMContentLoaded", generar);
