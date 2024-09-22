let btnSubmit = document.getElementById("btn-submit");
let nombre, numero, correo, motivo, afirmacion;

function mostrarDatos(){
    nombre = document.getElementById("nombre").value;
    numero = document.getElementById("numero").value;
    correo = document.getElementById("correo").value;
    motivo = document.getElementById("motivo").value;
    afirmacion = confirm(`${nombre} decidiste comunicarte con Alex por "${motivo}" siendo tus datos aclarados los siguientes: 
    Numero: ${numero}
    Correo: ${correo}
    Es esto correcto?    
    `);
    if(afirmacion){
        alert("Se ha enviado tu consulta")
    } else {
        close();
    }
}

btnSubmit.addEventListener("click", mostrarDatos);
btnSubmit.addEventListener("submit", mostrarDatos);