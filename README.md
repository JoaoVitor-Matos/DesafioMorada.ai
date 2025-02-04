# Morada.ai - Processo Seletivo - Engenheiro de Software (Estágio)

## Descrição

Esta API simula o funcionamento de um caixa eletrônico. Ela recebe um valor de saque desejado e retorna a quantidade de cédulas de cada valor necessárias para compor esse saque, utilizando a menor quantidade de cédulas possível. As cédulas consideradas são: 100, 50, 20, 10, 5 e 2.

## Principais Desafios

- Lidar com cenários onde o valor de saque não pode ser atendido com as cédulas disponíveis.
- Documentar e testar adequadamente a lógica de saque para garantir a robustez do código

## 🚀 Como utilizar

Clone o projeto para o local desejado em seu computador.

$ git clone https://github.com/JoaoVitor-Matos/DesafioMorada.ai

## 🚧 Executando o projeto

Entre na pasta raiz do repositório

$ cd DesafioMorada.ai

Instale as dependências necessárias

$ npm install

Execute a aplicação localmente:

$ npm run dev

💡 Realizando Requisições

A aplicação estará rodando na porta 3333.

Para realizar requisições, utilizei uma extensão do VSCode chamada REST Client. Com a extensão baixada, clique no arquivo client.http para realizar a requisição. Você pode alterar o valor para um inteiro positivo e clicar em SEND REQUEST que estará em cima de:

POST {{baseUrl}}/api/saque
Content-Type: application/json

{
  "valor": 100 // Troque o número para realizar a requisição com diferentes valores
}

💡 Realizando Requisições com outros aplicativos de requisição como, por exemplo, Insomnia

-Abra o Insomnia e clique em Create para criar uma nova requisição.
-Dê um nome à requisição e selecione o método POST.
-No campo URL, insira http://localhost:3333/api/saque.
-Vá até a aba Body e selecione JSON.
-Insira o seguinte JSON no corpo da requisição:

{
  "valor": 100
}

-Troque o valor 100 pelo valor desejado para testar diferentes números.
-Clique em Send para enviar a requisição.

## Scripts Disponíveis
-npm start: Inicia a aplicação em modo de produção.
-npm run dev: Inicia a aplicação em modo de desenvolvimento com nodemon.
-npm test: Executa os testes unitários com jest.

Feito por João Vitor Matos
