let form = document.getElementById('formulario');

form.addEventListener('submit', function(e){

    console.log("funcionou o botão");

    e.preventDefault();

    const justifica = document.querySelector("#justificativa");
    justifica.style.display = "none";
    const permiteAnimais = document.querySelector("#permiteAnimais");
    permiteAnimais.style.display = "none";
    const quintalSeguro = document.querySelector('#quintalSeguro');
    quintalSeguro.style.display = "none";
    const erroTempos = document.getElementById('erroTempo');

    let valido= true;

    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let telefone = document.getElementById('telefone').value;
    let cpf = document.getElementById('cpf').value;
    let idade = document.getElementById('idade').value;
    let cidade = document.getElementById('cidade').value;
    let moradia = document.querySelector('input[name="moradia"]:checked');
    let permite = document.querySelector('input[name="permite"]:checked');
    let quintal = document.querySelector('input[name="quintal"]:checked');
    let seguro = document.querySelector('input[name="seguro"]:checked');
    let pet = document.getElementsByName('pet').value;
    let tempo = Number(document.getElementById('tempo').value);
    let motivo = document.getElementById('motivo').value;
    let termo = document.getElementById('termo').checked;
    let inputjustifica = document.getElementById('justifica').value;

    document.getElementById('erroNome').textContent = "";
    document.getElementById('erroEmail').textContent = "";
    document.getElementById('erroCpf').textContent = "";
    document.getElementById('erroIdade').textContent = "";
    document.getElementById('erroCidade').textContent = "";
    document.getElementById('erroMotivo').textContent = "";
    document.getElementById('erroTermo').textContent = "";
    document.getElementById('erroPet').textContent = "";
    document.getElementById('erroMoradia').textContent ="";
    document.getElementById('erroPermite').textContent = "";
    document.getElementById('erroSeguro').textContent = "";

    if(!termo){
        document.getElementById('erroTermo').textContent = "Você precisa aceitar os termos."
        valido = false;
    }

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

    if(tempo > 8){
        erroTempos.textContent = "Você precisa de uma justificativa para esse tempo";
        justifica.style.display = "block";
        justifica.style.backgroundColor = "rgb(255, 184, 157)";
        valido = false
        if(inputjustifica.length > 0){
            erroTempos.textContent = "";
            justifica.style.backgroundColor = "rgb(255, 255, 255)";
        }
    }

    if(quintal.value === "naoPossui"){
        document.getElementById('erroQuintal').textContent = "Seu quintal é seguro?";
        quintalSeguro.style.display = "block";
        if(seguro.value === "seguro"){
            document.getElementById('erroQuintal').textContent = "";
            document.getElementById('erroSeguro').textContent = "";
        } else {
            document.getElementById('erroQuintal').textContent = "";
            document.getElementById('erroSeguro').textContent = "problema voce não pdoe ter animais!!";
            valido = false
        }
    }

    if(!moradia){
    document.getElementById('erroMoradia').textContent = "Selecione uma moradia";
    valido = false;
    } else {
        document.getElementById('erroMoradia').textContent = "";
    }
    if(moradia.value === "ap"){
        permiteAnimais.style.display = "block";
        if(permite.value === "permite"){
            permiteAnimais.style.backgroundColor = "white";
        } else {
            document.getElementById('erroPermite').textContent = "Você não pode ter animais";
            permiteAnimais.style.backgroundColor = "rgb(255, 184, 157)";
            valido = false;
        }
    }

    if(valido){
        alert("Formulário enviado com sucesso!");
        form.submit();
    }

})

