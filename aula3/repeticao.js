const cliente = {
  nome: "Joao",
  idade: 24,
  email: "joao@firma.com",
  telefone: ["1155555550", "6198985630"],
};

cliente.enderecos = [
  {
    rua: "Rua Milton Campos",
    numero: 1337,
    apartamento: true,
    complemento: "ap 934",
  },
];
for (let chave in cliente) {
    let tipo = typeof(cliente[chave]);
    if (tipo !== "object" && tipo !== "function") {
        console.log(`A chave ${chave}, tem o valor ${cliente[chave]}`);
    }
}