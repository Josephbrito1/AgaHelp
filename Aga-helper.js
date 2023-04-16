// Obtener todas las células del jugador en la página
const cells = document.querySelectorAll('.my-cells');

// Crear un objeto para almacenar la información de ubicación y tamaño de todas las células
const cellData = {};

// Iterar sobre las células y extraer la información necesaria
cells.forEach((cell, index) => {
  cellData[index] = {
    x: cell.offsetTop,
    y: cell.offsetLeft,
    width: cell.offsetWidth,
    height: cell.offsetHeight
  };
});

/////////////////////////////////////////////////////////////////

// Función para dividir la célula
function dividirCelula() {
    // Obtener la célula seleccionada
    const selectedCell = document.querySelector('.selected-cell');
    if (selectedCell) {
      // Crear una nueva célula con la mitad del tamaño de la célula seleccionada y agregarla al DOM
      const newCell = document.createElement('div');
      newCell.style.width = selectedCell.style.width / 2;
      newCell.style.height = selectedCell.style.height / 2;
      newCell.classList.add('my-cells');
      selectedCell.insertAdjacentElement('afterend', newCell);
    }
  }
  
  // Función para dar una pequeña porción de la célula
  function darPorcionCelula() {
    // Obtener la célula seleccionada
    const selectedCell = document.querySelector('.selected-cell');
    if (selectedCell) {
      // Actualizar el tamaño de la célula seleccionada
      selectedCell.style.width = selectedCell.style.width / 2;
      selectedCell.style.height = selectedCell.style.height / 2;
    }
  }
  
  // Agregar eventos de clic a los botones "Espacio" y "W"
  const espacioBtn = document.querySelector('#espacio-btn');
  const wBtn = document.querySelector('#w-btn');
  espacioBtn.addEventListener('click', dividirCelula);
  wBtn.addEventListener('click', darPorcionCelula);
  