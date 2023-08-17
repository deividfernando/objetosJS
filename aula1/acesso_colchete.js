const cliente = {
    nome: 'Deivid',
    idade: 34,
    cpf: '07431356609',
    email: 'deivid.fernando88@gmail.com',
};

console.log(`O nome do cliente é ${cliente['nome']} e essa pessoa tem ${cliente['idade']} anos`);

console.log(`Os três primeiros dígitos do CPF são ${cliente['cpf'].substring(0,3)}`);

const chaves = ['nome', 'idade', 'cpf', 'email', 'altura'];

chaves.forEach((chave => {
    console.log(`A chave ${chave} tem valor ${cliente[chave]}`);
}))