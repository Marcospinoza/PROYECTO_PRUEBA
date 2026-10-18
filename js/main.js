/* ==========================================
   1. ELEMENTOS DEL HTML
========================================== */

const botonMenu = document.querySelector('.menu-toggle');
const menu = document.querySelector('#menu-principal');
const fondo = document.querySelector('.menu-backdrop');


/* ==========================================
   2. ABRIR Y CERRAR EL MENÚ
========================================== */

function cambiarMenu(abierto) {

    // Mostrar u ocultar el menú y su fondo.
    menu.classList.toggle('abierto', abierto);
    fondo.classList.toggle('abierto', abierto);

    // Evitar desplazar la página mientras el menú esté abierto.
    document.body.classList.toggle('menu-abierto', abierto);

    // Este atributo activa la transformación de hamburguesa a X en CSS.
    botonMenu.setAttribute('aria-expanded', String(abierto));

    if (abierto) {
        botonMenu.setAttribute('aria-label', 'Cerrar menú');
    } else {
        botonMenu.setAttribute('aria-label', 'Abrir menú');
    }
}


/* ==========================================
   3. CLIC EN EL BOTÓN HAMBURGUESA
========================================== */

botonMenu.addEventListener('click', function () {

    const estaAbierto = menu.classList.contains('abierto');

    cambiarMenu(!estaAbierto);
});


/* ==========================================
   4. CLIC EN EL FONDO OSCURO
========================================== */

fondo.addEventListener('click', function () {

    cambiarMenu(false);
});


/* ==========================================
   5. CLIC EN UN ENLACE DEL MENÚ
========================================== */

const enlaces = menu.querySelectorAll('a');

for (const enlace of enlaces) {

    enlace.addEventListener('click', function () {

        cambiarMenu(false);
    });
}


/* ==========================================
   6. CERRAR CON LA TECLA ESCAPE
========================================== */

document.addEventListener('keydown', function (evento) {

    if (evento.key === 'Escape') {

        cambiarMenu(false);
    }
});
