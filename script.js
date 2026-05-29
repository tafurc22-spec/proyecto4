const input = document.getElementById('ingresar-tarea');
const boton = document.querySelector('button');
const listaDeTareas = document.getElementById('lista-de-tareas');

boton.addEventListener('click', agregarTarea);
input.addEventListener('keydown', (e) => {
  if (e.key == 'Enter') {
    agregarTarea();
  }
});

function agregarTarea() {
  if (input.value) {
    
    let tareaNueva = document.createElement('div');
    tareaNueva.classList.add('tarea');

    let texto = document.createElement('p');
    texto.innerText = input.value;
    tareaNueva.appendChild(texto);

    let iconos = document.createElement('div');
    iconos.classList.add('iconos');
    tareaNueva.appendChild(iconos);

    let completar = document.createElement('i');
    completar.classList.add('bi', 'bi-check-circle-fill', 'icono-completar');
    completar.addEventListener('click', completarTarea);

    let editar = document.createElement('i');
    editar.classList.add('bi', 'bi-pencil-square', 'icono-editar');
    editar.addEventListener('click', editarTarea);

    let eliminar = document.createElement('i');
    eliminar.classList.add('bi', 'bi-trash3-fill', 'icono-eliminar');
    eliminar.addEventListener('click', eliminarTarea);

    iconos.append(completar, editar, eliminar);

    listaDeTareas.appendChild(tareaNueva);
    input.value = '';
  } else {
    alert('Por favor ingresa una tarea.');
  }
}

function completarTarea(e) {
  let tarea = e.target.parentNode.parentNode;
  tarea.classList.toggle('completada');
}

function editarTarea(e) {
  let tarea = e.target.parentNode.parentNode;
  let parrafo = tarea.querySelector('p');

  let textoActual = parrafo.innerText;
  let inputEditar = document.createElement('input');
  inputEditar.type = 'text';
  inputEditar.value = textoActual;

  parrafo.replaceWith(inputEditar);
  inputEditar.focus();

  function guardarCambios() {
    let nuevoParrafo = document.createElement('p');
    nuevoParrafo.innerText = inputEditar.value.trim() || textoActual;
    inputEditar.replaceWith(nuevoParrafo);
  }

  inputEditar.addEventListener('keydown', function(evento) {
    if (evento.key === 'Enter') {
      guardarCambios();
    }
  });

  inputEditar.addEventListener('blur', guardarCambios);
}

function eliminarTarea(e) {
  let tarea = e.target.parentNode.parentNode;
  tarea.remove();
}