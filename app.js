// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación.
//  Aquí deberás desarrollar la lógica para resolver el problema

// ARRAY PARA ALMACENAR LOS NOMBRES
let amigos = [];

// FUNCION PARA AGREGAR AMIGOS
function agregarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const nombreAmigo = inputAmigo.value.trim();

    // VALIDAMOS QUE EL CAMPO NO ESTÉ VACÍO
    if (nombreAmigo === "") {
        alert("Por favor ingrese un nombre");
        return;        
    }

    // VALIDAMOS QUE EL NOMBRE NO ESTÉ DUPLICADO 
    if (amigos.includes(nombreAmigo)) {
        alert(`El nombre ${nombreAmigo} ya está en la lista`);
        return;
    }

    // AGREGAR EL NOMBRE AL ARRAY 
    amigos.push(nombreAmigo);

    // LIMPIAMOS EL ESPACIO
    inputAmigo.value = "";

    // ACTUALIZAR LISTA EN HTML
    actualizarLista();
}

// FUNCION PARA ACTUALIZAR LISTA
function actualizarLista() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = ""; 

    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement('li');
        li.textContent = amigos[i];
        listaAmigos.appendChild(li);
    }   
}

// FUNCION PARA SELECCIONAR AMIGO
function sortearAmigo() {
    // VALIDAR QUE HAYA AMIGOS DISPONIBLES
    if (amigos.length === 0) {
        alert("No hay amigos en la lista, agrega al menos uno");
        return;
    }

    // GENERAR UN INDICE ALEATORIO
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    
    // OBTENER EL NOMBRE ALEATORIO
    const amigoSorteado = amigos[indiceAleatorio];

    // MOSTRAR EL RESULTADO
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `Amigo sorteado: <strong>${amigoSorteado}</strong>`;
}