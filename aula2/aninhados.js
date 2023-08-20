const cliente = {
    nome: "Joao",
    idade: 24,
    email: "joao@firma.com",
    telefone: ["1155555550", "6198985630"],
  };

  cliente.endereco = {
    rua: 'Rua Milton Campos',
    numero: 1337,
    apartamento: true,
    complemento: 'ap 934',
  };

  console.log(cliente);
  console.log(cliente.endereco);