const textarea = $("#area_texto");
const array = [];

//Calendário
$(function () {
  $("#date").datepicker({
    dateFormat: "dd/mm/yy",
  });
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
  var date_format = $("#date").val();

  //Pega ano
  var ano_hoje = date_hoje.getFullYear();
  var ano_usuario = date.getFullYear();
  //Calcula idade minima
  var idade_minima = ano_hoje - ano_usuario;
  const mensagem_erro_date = $("#mensagem_erro_date");

  if (idade_minima < 18 || idade_minima == ano_hoje) {
    mensagem_erro_date[0].innerText = "Idade inválida. Usuário menor de idade.";
    $("#erro_date").dialog();
  }

  //Incrementa os dados na tabela
  if (idade_minima > 18 && nome.length > 3 && nome.length < 50) {
    //Criando a linha
    var nova_linha = $("<tr>");
    $("<td>").text(nome).appendTo(nova_linha);
    $("<td>").text(date_format).appendTo(nova_linha);

    //Adicionar a linha na tabela
    $("#table").append(nova_linha);

    //Objeto json
    const objeto_json = {
      nome: "",
      data: 0,
    };

    objeto_json.nome = nome;
    objeto_json.data = date_format;

    array.push(objeto_json);
    const json = JSON.stringify(array);

    textarea.text(json);

    //Limpar variáveis
    $("nome").val("");
    $("data").val("");
  }

  //Limpar input
  $("#date").val("");
  $("#name").val("");
});
