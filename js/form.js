var botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click", function(event) {
   event.preventDefault();

    var form = document.querySelector("#form-adiciona");
    var paciente = obtemPacienteDoFormulario(form);
    var pacienteTr = montaTr(paciente); 

    function validaPeso(pesoPp) {
        if (pesoPp >= 0 && pesoPp <= 500) {
            return true;
        } else {
            return false;
        }
    }

    function validaAltura(alturaPp) {
        if (alturaPp >= 0 && alturaPp <= 3) {
            return true;
        } else {
            return false;
        }
    }

    function validaPaciente (paciente) {
        var erros = []
        if (paciente.nome.length === 0) {
            erros.push ("O nome não deve ser em branco");
        }
        if (!validaPeso(paciente.peso)){
            erros.push("O peso está inválido");
        }
        if (paciente.peso.length === 0 ) {
            erros.push ("O peso não deve zer em branco")
        }
        if (!validaAltura(paciente.altura)){
            erros.push("A altura está inválida");
        }
        if (paciente.altura.length === 0 ) {
            erros.push ("A altura não deve zer em branco");
        }
        if (paciente.gordura.length === 0 ) {
            erros.push ("A % de gordura não deve ser em branco");
        }
        return erros;
    }
    
    function exibeMensagemErro (erros) {
        var ul = document.querySelector(".texto-erro");
        ul.innerHTML = "";
        erros.forEach(function (erro) {
            var li = document.createElement("li");
            li.textContent = erro;
            ul.appendChild(li);   
        });
    }

    var erros = validaPaciente(paciente);
    if (erros.length > 0) {
        exibeMensagemErro(erros);
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


