// Para el amigo secreto
const amigos = [];

function agregarAmigo() {
  const input = document.getElementById('amigo');
  const nombre = input.value.trim();

  if (nombre === '') {
    alert('Por favor, inserte un nombre.');
    return;
  }

  amigos.push(nombre);
  input.value = '';

  mostrarLista();
}

function mostrarLista() {
  const lista = document.getElementById('listaAmigos');
  lista.innerHTML = ''; // Limpia la lista antes de actualizar

  amigos.forEach((nombre) => {
    const li = document.createElement('li');
    li.textContent = nombre;
    lista.appendChild(li);
  });
}
function sortearAmigos() {
  if (amigos.length < 2) {
    alert('Necesitas al menos dos amigos para sortear.');
    return;
  }

  const indiceGanador = Math.floor(Math.random() * amigos.length);
  const ganador = amigos[indiceGanador];
  alert(`El amigo secreto es: ${ganador}`);
}// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
