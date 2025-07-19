# Importando o Node
Sintaxe utilizada, é de uma versão mais nova do Node.js, sendo necessário informar no package.json.
- Comando para criar o package: (npm init -y)
- Chave: "type"
- Valor: "module"

Para manter o servidor ativo e atualizado a cada alteração: node --watch --no-warnings server.js
Ou adicionar na seção scripts do package.json.

## Dependências
1. fastify : npm install fastify
2. postgres : npm install postgres
3. dotenv : npm install dotenv -D
4. neon : npm install @neondatabase/serverless