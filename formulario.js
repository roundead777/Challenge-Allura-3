var inputNome = document.querySelector("#nome");
var inputEmail = document.querySelector("#email");
var inputAssunto = document.querySelector("#assunto");
var inputMensagem  = document.querySelector("#mensagem");



var botaoEnviar = document.querySelector("#btn-enviar");
botaoEnviar.addEventListener("click", function(event){
    event.preventDefault();
var form = document.querySelector("#form-contato");

var nome = form.nome.value;
var email = form.email.value;
var assunto = form.assunto.value;
var mensagem = form.mensagem.value;

var erro = document.querySelector("#mensagem-erro");
var sucesso = document.querySelector("#mensagem-sucesso");


//validar campos do input
if(!validaMensagem(mensagem)){
	erro.innerHTML = "Nenhum dos campos podem estar em branco!!"
	return;
}else{
	erro.innerHTML="";
}

function validaMensagem(mensagem){
	
	if(nome.length == 0 || email.length == 0 || assunto.length == 0 || mensagem.length == 0){
		return false;
	}else{
		return true;

	}
}
sucesso.innerHTML = "Mensagem enviada,obrigado pelo contato!!";
form.reset();

});