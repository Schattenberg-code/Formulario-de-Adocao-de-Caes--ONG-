let form = document.getElementById('formulario');

form.addEventListener('submit', function(e){

    e.defaultPrevented();

    let valido= true;

    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let cpf = document.getElementById('cpf').value;
    let idade = document.getElementById('idade').value;
    let cidade = document.getElementById('cidade').value;
    let moradia = document.getElementsByName('moradia').value;
    let quintal = document.getElementsByName('quintal').value;
    let pet = document.getElementsByName('pet').value;
    let tempo = document.getElementById('tempo').value;
    let motivo = document.getElementById('motivo').value;
    let termos = document.getElementById('aceito').value;

    document.getElementById('erroNome').textContent = "";
    document.getElementById('erroEmail').textContent = "";
    document.getElementById('erroCpf').textContent = "";
    document.getElementById('erroIdade').textContent = "";
    document.getElementById('erroCidade').textContent = "";
    document.getElementById('erroTempo').textContent = "";
    document.getElementById('erroMotivo').textContent = "";

    if(nome.length < 3){
        document.getElementById('erroNome').textContent = "Seu nome precisa ter mais de 3 caracteres";
        valido = false;
    }

    if(!email.include('@')){
        document.getElementById('erroEmail').textContent = "Seu email precisa conter um '@'";
        value = false;
    }

    if(cpf.length < 14){
        document.getElementById('erroCpf').textContent = "Seu Cpf é invalido";
        value = false;
    }

    if(idade >120 || idade < 18){
        document.getElementById('erroIdade').textContent = "Insira um idade valida";
        valido = false;
    }

    if(valido){
        document.getElementById
    }







})

