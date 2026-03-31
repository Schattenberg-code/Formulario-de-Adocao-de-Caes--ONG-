let form = document.getElementById('formulario');

form.addEventListener('submit', function (e) {

    console.log("funcionou o botão");

    e.preventDefault();



    const justifica = document.querySelector("#justificativa");
    justifica.style.display = "none";
    const permiteAnimais = document.querySelector("#permiteAnimais");
    permiteAnimais.style.display = "none";
    const quintalSeguro = document.querySelector('#quintalSeguro');
    quintalSeguro.style.display = "none";
    const erroTempos = document.getElementById('erroTempo');
    const naoPet = document.getElementById('erroPet');
    const possuirQuintal = document.querySelector("#possuirQuintal");
    possuirQuintal.style.display = "block";



    let valido = true;



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
    let pet = document.querySelector('input[name="pet"]:checked');
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
    document.getElementById('erroMoradia').textContent = "";
    document.getElementById('erroPermite').textContent = "";
    document.getElementById('erroSeguro').textContent = "";



    //------------------------------validações simples----------------------------------//

    let cpfvalidados = ['11111111111111', '23459837261498'];
    let motivosinvalidos = ['porque sim', 'porque eu quero', 'quero', 'cebola']


    if (pet && pet.value === "naoTeve") {
        naoPet.textContent = "Você podera receber apoio da ONG!";
        naoPet.style.color = "black";
    }

    if (!document.getElementById('tempo').value) {
        erroTempos.textContent = "Insira um tempo";
        valido = false;
    }

    if (!pet) {
        naoPet.textContent = "Informe se você ja teve um pet."
        valido = false;
    }

    if (!quintal) {
        document.getElementById('erroQuintal').textContent = "selecione se você tem quintal ou não."
        valido = false;
    }

    if (!moradia) {
        document.getElementById('erroMoradia').textContent = "Selecione uma moradia.";
        valido = false;
    }

    if (!termo) {
        document.getElementById('erroTermo').textContent = "Você precisa aceitar os termos."
        valido = false;
    }

    if (cidade.length < 1) {
        document.getElementById('erroCidade').textContent = "Insira um nome de cidade."
        valido = false;
    }

    if (nome.length < 3) {
        document.getElementById('erroNome').textContent = "Seu nome precisa ter mais de 3 caracteres.";
        valido = false;
    }

    if (telefone.length < 8) {
        document.getElementById('erroTelefone').textContent = "insira um número valido.";
        valido = false;
    }

    if(email.length < 1){
        document.getElementById('erroEmail').textContent = "Insira um email";
        valido = false;
    } else if (!email.includes('@')) {
        document.getElementById('erroEmail').textContent = "Seu email precisa conter um '@'.";
        valido = false;
    } else {
        document.getElementById('erroEmail').textContent = "";
    }

    if (cpfvalidados.includes(cpf)) {
        document.getElementById('erroCpf').textContent = "Esse CPF já esta cadastrado.";
    } else if (cpf.length < 14) {
        document.getElementById('erroCpf').textContent = "Seu Cpf é invalido.";
        valido = false;
    }

    if (idade > 120 || idade < 18) {
        document.getElementById('erroIdade').textContent = "Insira uma idade valida.";
        valido = false;
    }


    //------------------------validações complexas-----------------------------//

    
    if (!motivo) {
        document.getElementById('erroMotivo').textContent = "Adicione o motivo da adoção."
    }else{
        if (motivosinvalidos.includes(motivo.toLowerCase())) {
                document.getElementById('erroMotivo').textContent = "Insira um motivo valido...";
        }
    }
    

    if (tempo > 8) {
        erroTempos.textContent = "Você precisa de uma justificativa para esse tempo.";
        justifica.style.display = "block";
        justifica.style.backgroundColor = "rgb(255, 184, 157)";
        valido = false
        if (inputjustifica.length > 0) {
            erroTempos.textContent = "";
            justifica.style.backgroundColor = "rgb(255, 255, 255)";
        }
    } else if (document.getElementById('tempo').value && tempo >= 0 && tempo <= 8) {
        erroTempos.textContent = "";
    }


    


    if (quintal && quintal.value === "possui") {
        document.getElementById('erroQuintal').textContent = "Seu quintal é seguro?";
        quintalSeguro.style.display = "block";
        valido = false;
        if (seguro && seguro.value === "seguro") {
            document.getElementById('erroQuintal').textContent = "";
            document.getElementById('erroSeguro').textContent = "";
            quintalSeguro.style.backgroundColor = "white";
            valido = true;
            } else {
                document.getElementById('erroQuintal').textContent = "";
                document.getElementById('erroSeguro').textContent = "Você não pode ter um animal!";
                quintalSeguro.style.backgroundColor = "rgb(255, 184, 157)";
                valido = false
            }
    }else{
        document.getElementById('erroQuintal').textContent = "";
    }


    if (moradia && moradia.value === "ap") {
        permiteAnimais.style.display = "block";
        possuirQuintal.style.display = "none";
        if (permite.value === "permite") {
            permiteAnimais.style.backgroundColor = "white";
        }else{
                document.getElementById('erroPermite').textContent = "Você não pode ter um animal!";
                permiteAnimais.style.backgroundColor = "rgb(255, 184, 157)";
                valido = false;
             }
    }


    //--------------------------------validação do botão submit--------------------------------------//

    if (valido) {
        alert("Formulário enviado com sucesso!");
        form.submit();
    }

})

