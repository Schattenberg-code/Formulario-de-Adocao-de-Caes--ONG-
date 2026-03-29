let form = document.getElementById('formulario');

form.addEventListener('submit', function(e){

    console.log("funcionou o botão");

    e.preventDefault();

    let valido= true;

    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let telefone = document.getElementById('telefone').value;
    let cpf = document.getElementById('cpf').value;
    let idade = document.getElementById('idade').value;
    let cidade = document.getElementById('cidade').value;
    let moradia = document.querySelector('input[name="moradia"]:checked');
    let quintal = document.getElementsByName('quintal').value;
    let pet = document.getElementsByName('pet').value;
    let tempo = document.getElementById('tempo').value;
    let motivo = document.getElementById('motivo').value;
    let termos = document.getElementById('termo').checked;

    document.getElementById('erroNome').textContent = "";
    document.getElementById('erroEmail').textContent = "";
    document.getElementById('erroCpf').textContent = "";
    document.getElementById('erroIdade').textContent = "";
    document.getElementById('erroCidade').textContent = "";
    document.getElementById('erroTempo').textContent = "";
    document.getElementById('erroMotivo').textContent = "";

    if(cidade.length < 1){
        document.getElementById('erroCidade').textContent = "Insira um nome de cidade."
        valido = false;
    }

    if(nome.length < 3){
        document.getElementById('erroNome').textContent = "Seu nome precisa ter mais de 3 caracteres.";
        valido = false;
    }

    if(telefone.length < 8){
        document.getElementById('erroTelefone').textContent = "insira um numero valido.";
        valido = false;
    }

    if(!email.includes('@')){
        document.getElementById('erroEmail').textContent = "Seu email precisa conter um '@'.";
        valido = false;
    }

    if(cpf.length < 14){
        document.getElementById('erroCpf').textContent = "Seu Cpf é invalido.";
        valido = false;
    }

    if(idade >120 || idade < 18){
        document.getElementById('erroIdade').textContent = "Insira um idade valida.";
        valido = false;
    }

    if(valido){
        alert("Formulário enviado com sucesso!");
        form.submit();
    }

})

