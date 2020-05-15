## Sobre o Desafio 

Desenvolver uma aplicação de perguntas e respostas.

## Informações

### Tecnologias, linguagens, frameworks utilizados

- Backend - No Backend foi utilizado NodeJS com Typescript.
- Frontend - Utilizado ReactJS com Javascript.
- Banco de Dados - Postgres.

- Websocket para respostas em tempo real.
- Eslint e Prettier para padronização do código.
- Typeorm para a o mapeamento de objetos.
- Jest para os testes da API.
- Swagger para a documentação da API.
- DockerFile para a criação de containers.
- Docker Compose para a criação do ambiente integrado.

O projeto pode ser startado de forma integrado, utilizando o docker para a execução:

O Backend e o Frontend pode ser executados separadamentes, desde que exista um servidor do Postgres disponível, ou mesmo um containter docker com a imagem do Postgres.

## Execução integrada
- Na pasta raiz
```
docker-compose up
```

## Execução do Backend
- Na pasta backend

```
yarn dev:server
```

Após o start do servidor, a documentação da api estará disponível em:

[http://localhost:3333/api-docs](http://localhost:3333/api-docs)

Para a execução dos testes, executar:
```
yarn test
```

## Execução do Frontend
- Na pasta frontend
```
yarn start
```
Após o start, acessar o sistema em:

[http://localhost:3000](http://localhost:3000)

## Contribuições
Contribuições são bem vindas. Qualquer dúvida, entre em contato.

