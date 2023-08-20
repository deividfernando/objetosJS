const cliente = {
    nome: "Joao",
    idade: 24,
    email: "joao@firma.com",
    telefone: ["1155555550", "6198985630"],
  };

  cliente.enderecos = [
    {
      rua: 'Rua Milton Campos',
      numero: 1337,
      apartamento: true,
      complemento: 'ap 934',
    },
  ]

  cliente.enderecos.push({
    rua: 'Rua Jaboticabal',
    numero: 38,
    apartamento: false,
  });

  const listaAp = cliente.enderecos.filter((endereco) => endereco.apartamento === true);

  console.log(listaAp);
