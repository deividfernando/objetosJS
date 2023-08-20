const cliente = {
  nome: "Joao",
  idade: 24,
  email: "joao@firma.com",
  telefone: ["1155555550", "6198985630"],
  saldo: 200,
  efetuaPagameto: function (valor) {
    if (valor > this.saldo) {
      console.log(`Saldo insuficiente.`);
    } else {
      this.saldo -= valor;
      console.log(`Pagamento realizado. Novo saldo é de ${this.saldo}`);
    }
  },
};

cliente.efetuaPagameto(25);

const objPersonagem = {
    nome: "Gandalf",
    classe: "mago",
    nivel: "20"
   }
   
   const objPersonagem2 = Object.create(objPersonagem);
   objPersonagem2.nome = "Gandalf, o Cinzento";
   
   console.log(objPersonagem.nome);
   console.log(objPersonagem2.nome);