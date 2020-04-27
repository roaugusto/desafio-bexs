## Sobre o Desafio 

O objetivo desse desafio é desenvolver uma aplicação de perguntas e respostas, tal como fóruns da internet, Reddit, etc.
Nela será possível navegar pelas perguntas, criar uma nova, consultar as respostas feitas pela comunidade ou até mesmo responder a uma pergunta.
Você será responsável pelo desenvolvimento tanto do back-end como do front-end. Sinta-se à vontade para usar a linguagem que se sinta mais confortável e frameworks que desejar.

## Tecnologias, linguagens, frameworks utilizados

- Backend - No Backend foi utilizado NodeJS com Typescript.
- Frontend - Utilizado ReactJS com Javascript.
- Banco de Dados - Postgres.

- Eslint e Prettier para padronização do código.
- Typeorm para a o mapeamento de objetos.
- Jest para os testes da API.
- Swagger para a documentação da API.
- DockerFile para a criação de containers.
- Docker Compose para a criação do ambiente integrado.


## Informações

O Backend e o Frontend pode ser executados separadamentes, desde que exista um servidor do Postgres disponível, ou mesmo um containter docker com a imagem do Postgres.

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

## Execução integrada
- Na pasta raiz
```
docker-compose up
```

## Contribuições
Contribuições são bem vindas. Qualquer dúvida, entre em contato.

