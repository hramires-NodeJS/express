express

### Requisições
```
Body apenas (POST/PUT)
Header (formatar/autenticação)
```

### HTTP Code
```
1xx - Informativo
2xx - Sucesso
    200 - Sucesso
    201 - Criado
3xx - Redirecionamento
    301 - Moveu permanentemente
    302 - Moveu
4xx - Erro no cliente
    400 - Bad request
    401 - Não autorizado
    404 - Não encontrado
5xx - Erro no servidor
    500 - Erro no interior do servidor
```

### Iniciar projeto Node
```
yarn init -y
```

### Adicionar Express para realiar requisições
```
yarn add express
```

### Adicionar Nodemon para assim que salvar executar automaticamente (-D para apenas ambiente de DEV)
```
yarn add nodemon -D
```

### Executando sem o Nodemon
```
node src/index.js
```

### Executando com o Nodemon
```
yarn nodemon src/index.js
```
