const botao = document.getElementById("enviar")
const campoNome = document.getElementById("nome")
const campoSenha = document.getElementById("senha")
const mensagem = document.getElementById("mensagem")

botao.addEventListener("click", function(){

    let nome = campoNome.value;
    let senha = Number(campoSenha.value);

    if(nome === '' || isNaN(senha)){
        mensagem.textContent = "Por favor, preencha todos os campos corretamente!";
        MessageChannel.style.color = "red";
        return;
    }
    
    if(senha === 1234){
        mensagem.textContent = `Bem-vindo, ${nome}!`;
        mensagem.style.color = "green";
        return;
    } else{
        mensagem.textContent = "A senha está incorreta. Tente novamente!"
        mensagem.style.color = "red"
    }
});