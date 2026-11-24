# Clasificador de funciones matemáticas

Esta página muestra una función de primer grado con forma:

```text
f(x) = bx + c
```

## Qué hace el proyecto

- Genera aleatoriamente un número entero `b` entre `-3` y `3`.
- Genera aleatoriamente un número entero `c` entre `-3` y `3`.
- Clasifica la función como lineal, afín o constante.
- Muestra una cuarta categoría llamada sin función para datos no válidos.
- Grafica la función dentro de GeoGebra.
- Cambia las tarjetas para resaltar visualmente la clasificación activa.

## Archivos

### `matematicas.html`

Contiene la estructura visible:

- El título principal.
- Los cuadros donde se muestran `b` y `c`.
- El botón que genera una nueva función.
- Las tarjetas de función lineal, afín, constante y sin función.
- El contenedor donde se inserta la gráfica.
- Los enlaces a GeoGebra y a JavaScript.

### `matematicas.css`

Define la presentación:

- El fondo degradado azul.
- Los colores amarillo, turquesa, blanco y rosado.
- La posición centrada de los elementos.
- Los bordes redondeados y las sombras.
- La tarjeta activa que cambia de color.
- La adaptación para teléfonos en pantallas pequeñas.

### `matematicas.js`

Controla el comportamiento:

- `generar()` crea los valores aleatorios y actualiza el texto.
- `construirFormula()` forma la expresión matemática.
- `quitarClaseActiva()` elimina el resaltado anterior.
- `actualizarGeoGebra()` cambia los parámetros del gráfico.
- `iniciarGeoGebra()` carga GeoGebra y crea la recta.
- El evento `DOMContentLoaded` inicia la página automáticamente.

## Clasificaciones

| Tipo | Condición | Ejemplo |
|---|---|---|
| Lineal | `c = 0` y `b ≠ 0` | `f(x) = 2x` |
| Afín | `b ≠ 0` y `c ≠ 0` | `f(x) = 2x + 3` |
| Constante | `b = 0` | `f(x) = 3` |
| Sin función | `b` o `c` no son números válidos | Sin datos válidos |

## Comportamiento de la pendiente

- Si `b > 0`, la recta es creciente.
- Si `b < 0`, la recta es decreciente.
- Si `b = 0`, la recta es constante y horizontal.

## Cómo abrir el proyecto

1. Abrir `matematicas.html` en un navegador.
2. Pulsar el botón **Generar otra función**.
3. Observar el cambio de valores, tarjeta activa y gráfica.
4. Usar el enlace de GeoGebra si se desea trabajar con la construcción completa.