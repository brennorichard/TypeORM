### Avaliação TypeORM


API de gerenciamento de informações de times de futebol e partidas.

-  ### Instalação
```
Navegue até o diretório do projeto: cd typeorm
Instale as dependências: npm install 
```
-  ### Configuração
```
Crie um arquivo .env na raiz do projeto:
PORT = 3004
```
- ### Uso
```
Inicie o servidor localmente: npm start
A API estará disponível em: http://localhost:3004
```

--------------

### Rotas:
##### Para as rotas que utilizam um body JSON,  verifique o PDF com as instruções para cada requisição.

[<a href="">PDF<a>]

GET /team  &nbsp;&nbsp;&nbsp; Retorna todos os times cadastrados.<br /> 
GET /team/:id &nbsp;&nbsp;&nbsp; Retorna um time de acordo com seu ID.<br /> 
POST /team  &nbsp;&nbsp;&nbsp; Cria um novo time. Requer um corpo JSON contendo o nome do time.<br /> 
PUT /team/:id &nbsp;&nbsp;&nbsp;Atualiza informações de um time existente. Requer um corpo JSON contendo o nome do time.<br /> 
DELETE /team/:id   &nbsp;&nbsp;&nbsp; Exclui um time de acordo com seu ID.<br /