# Importing Node
The syntax used comes from a newer version of Node.js, so it’s necessary to configure it in the package.json file.
Command to create the package file: npm init -y
Key: "type"
Value: "module"
To keep the server running and automatically reloading on every change:

node --watch --no-warnings server.js

Or add it as a script in the scripts section of package.json.

# Dependencies
1. fastify – npm install fastify
2. postgres – npm install postgres
3. dotenv – npm install dotenv -D
4. neon – npm install @neondatabase/serverless