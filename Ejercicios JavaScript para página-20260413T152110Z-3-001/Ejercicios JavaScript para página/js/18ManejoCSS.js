// Variable global para controlar el estado
var e1_toggle = true;

// Función principal para cambiar el estilo
function toggleStyleSheet() {
    var node = document.getElementById('e1_style');
    // Verificamos si el nodo existe antes de intentar borrarlo
    if (node) {
        node.parentNode.removeChild(node);
    }
    
    var sheet = document.createElement('style');
    sheet.id = 'e1_style';
    
    if (e1_toggle) {
        sheet.innerHTML = "#e1 {border: 2px solid black; background-color: blue; color: white;}";
    } else {
        sheet.innerHTML = "#e1 {font-weight: bold; font-size: 115%; color: green;}";
    }

    document.body.appendChild(sheet);
    e1_toggle = !e1_toggle;
    
    updateNumberOfStyleSheets();
}

// Función para actualizar el contador
function updateNumberOfStyleSheets(){
    var spanNum = document.getElementById('numOfStyleSheets');
    if (spanNum) {
        spanNum.innerHTML = document.styleSheets.length;
    }
}

// Función auxiliar para agregar eventos de clic
function addOnClick(el, func) {
    if (!el) return; // Evita errores si no encuentra el elemento
    if (el.addEventListener) {
        el.addEventListener('click', func, false);
    } else {
        el.attachEvent('onclick', func);
    }
}

// --- INICIALIZACIÓN ---
// Asignamos el evento al botón
var botonToggle = document.getElementById('tss');
addOnClick(botonToggle, toggleStyleSheet);

// Ejecutamos el contador por primera vez al cargar la página
updateNumberOfStyleSheets();