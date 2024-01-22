const lista = [
  {
    id: "231589",
    nome: "Lucas",
    time: "Amarelo",
  },
  {
    id: "502850",
    nome: "Pedro",
    time: "Vermelho",
  },
  {
    id: "296041",
    nome: "Tiago",
    time: "Verde",
  },
  {
    id: "612095",
    nome: "Vitor",
    time: "Azul",
  },
];

var usuarioEncontrado;

function checarId() {
  var idUsuario = document.getElementById("id").value;
  usuarioEncontrado = lista.find(function (usuario) {
    return usuario.id === idUsuario;
  });

  if (usuarioEncontrado) {
    redirecionarParaPagina(usuarioEncontrado.time);
  } else {
    alert("ID não encontrado na lista.");
  }
}

function redirecionarParaPagina(time) {
  switch (time) {
    case "Amarelo":
      window.location.href = "time-amarelo.html";
      break;
    case "Vermelho":
      window.location.href = "time-vermelho.html";
      break;
    case "Verde":
      window.location.href = "time-verde.html";
      break;
    case "Azul":
      window.location.href = "time-azul.html";
      break;
    default:
      alert("Time não reconhecido.");
      break;
  }
}

function nome() {
  return usuarioEncontrado.nome;
}
