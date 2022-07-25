console.log('Bienvenido al Juego de Letras');

function intentos() {
    var intentos = document.getElementById('intentos');
    var button = document.getElementById('button');
        button.onclick = function () {
            for (let i = 1; i <= 3; i++) {
                intentos.innerText = "Intentos: " + (i-1); 
                if(i == 1){
                    var segundoItento = validador();
                }else if(i == 2){
                    var segundoItento = validador();
                }else if(i == 3){
                    button.disabled = true;
                    alert("Se reinicio el Juego");
                }
            }
        }
}

function verificadorPalabras(evaluar){
    var palabras = ['modelo', 'sistemas', 'distribuidos', 'sistema', 'procesos', 'arquitectura'];
    for (let i = 0; i < palabras.length; i++) {
        if(palabras[i] == evaluar[i]){
            alert('Son iguales:' + evaluar[i]);
            
        }else {
            alert('F: ' + evaluar[i]);
        }
    }
}

function validador() {
    var lista_palabras = document.getElementsByClassName('palabras'),
        guardar_input = [];
    for (let i = 0; i < lista_palabras.length; i++) {
        guardar_input[i] = lista_palabras[i].value;
    }
    var verficador = verificadorPalabras(guardar_input);
    var contador = intentos();
}
