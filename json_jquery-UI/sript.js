//Calendário
$(function () {
  $("#date").datepicker();
});

//Validação das informações
$("#button").click(function () {
  //Validação do nome
  var nome = $("#name").val();
  const mensagem_erro_name = $("#mensagem_erro_name");

  if (nome.length < 3 || nome.length > 50) {
    mensagem_erro_name[0].innerText =
      "Digite um nome que tenha mais de 3 letras e menos que 50 letras.";
    $("#erro_name").dialog();
  }

  //Validação da data de nascimento
  //Define data
  var date_hoje = new Date();
  var date = $("#date").datepicker("getDate");
  //Pega ano
  var ano_hoje = date_hoje.getFullYear();
  var ano_usuario = date.getFullYear();

  var idade_minima = ano_hoje - ano_usuario;

  console.log(idade_minima);

  const mensagem_erro_date = $("#mensagem_erro_date");
  if (idade_minima < 18) {
    mensagem_erro_date[0].innerText = "Idade inválida. Usuário menor de idade.";
    $("#erro_date").dialog();
  }
});
