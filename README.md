# Desafio para entrevista Node.js

## Para executar o projeto

1. npm install
2. npm run typeorm migration:run
3. npm start

## Configurações para o banco de dados

As configurações para conexão estão localizadas no arquivo `ormconfig.json`

Os dados para a conexão com o MySQL

```mysql
host: localhost
port: 3333
user: root
password: root
database: compasso-uol
```

### Teste

Para testar foi utilizado o Insomnia, sendo o arquivo `InsomniaCollection.json` o export da collection usada para testes
