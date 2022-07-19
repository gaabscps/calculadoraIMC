var botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click", function(event) {
   event.preventDefault();

    var form = document.querySelector("#form-adiciona");
    var paciente = obtemPacienteDoFormulario(form);
    var pacienteTr = montaTr(paciente); 

    function validaPeso(pesoPp) {
        console.log(pesoPp);
        if (pesoPp >= 0 && pesoPp <= 500) {
            return true;
        } else {
            return false;
        }
    }

    function validaAltura(alturaPp) {
        if (alturaPp >= 1 && alturaPp <= 3) {
            return true;
        } else {
            return false;
        }
    }

    function validaPaciente (paciente) {
        if (!validaPeso(paciente.peso) || validaAltura(paciente.altura) === false) {
            return false;
        } else {
            return true;
        }
    }

    if (validaPaciente(paciente) === false) {
        var textoErro = document.querySelector(".texto-erro");
        textoErro.textContent = "Paciente inválido";
        return;
    }
    
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);

    function obtemPacienteDoFormulario(form) {
        var paciente = {
            nome: form.nome.value,
            peso: form.peso.value,
            altura: form.altura.value,
            gordura: form.gordura.value,
            imc: calculaImc(form.peso.value, form.altura.value)
        }
        return paciente;
    }

    function montaTr(paciente) {
        var pacienteTr = document.createElement("tr");
        pacienteTr.classList.add("paciente");

        pacienteTr.appendChild(montarTd(paciente.nome, "info-nome"));
        pacienteTr.appendChild(montarTd(paciente.peso, "info-peso"));
        pacienteTr.appendChild(montarTd(paciente.altura, "info-altura"));
        pacienteTr.appendChild(montarTd(paciente.gordura, "info-gordura"));
        pacienteTr.appendChild(montarTd(paciente.imc, "info-imc"));

        return pacienteTr;
    }

    function montarTd (dado, classe) {
                
        var td = document.createElement("td");
        td.classList.add(classe)
        td.textContent = dado;

        return td;
    }   

    form.reset();
});


