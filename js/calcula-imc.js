var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";


var pacientes = document.querySelectorAll(".paciente");
for(var i = 0; i < pacientes.length; i++) {
    var paciente = pacientes[i];

    var pesoPp = paciente.querySelector(".info-peso").textContent;
    var alturaPp = paciente.querySelector(".info-altura").textContent;

    var imcPp = paciente.querySelector(".info-imc");

    var pesoValidation = true ; 
    var alturaValidation = true;

    if(pesoPp <= 0 || pesoPp >= 500) {
        pesoValidation = false;
    }

    if(alturaPp <=0 || alturaPp >= 3.5) {
        alturaValidation = false;
    }

    if(pesoValidation && alturaValidation == true) {
        imcPp.textContent = calculaImc(pesoPp, alturaPp);  
    }else {
        imcPp.textContent = "Dados inválidos";
        paciente.classList.add("paciente-invalido");
    }
}


function calculaImc(pesoPp, alturaPp) {
    var imc = pesoPp / (alturaPp * alturaPp);

    return imc.toFixed(2);   
}