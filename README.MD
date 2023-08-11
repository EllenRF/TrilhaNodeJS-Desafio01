# Autenticação de usuário simples e login com Iquirer e Firebase

Primeiro desafio do processo de formação: criar um sistema de autenticação que utilizasse ao menos dois objetos, manipulação de arrays e funções de callbacks.

## Instalação

1. Clone o repositório para sua máquina local:

   ```bash
   git clone https://github.com/seu-usuario/nome-do-repositorio.git
   ```

2. Instale as dependências do projeto:

   ```bash
   npm install
   ```

3. Execute:
   ```bash
   npm start
   ```

## Configurando o .env (Máquina local)

- conecte seu firestore database criando um arquivo .env e colocando as seguintes keys do seu projeto.

```bash
FIREBASE_API_KEY=your_api_key
FIREBASE_AUTH_DOMAIN=your_auth_domain
FIREBASE_PROJECT_ID=your_project_id
FIREBASE_STORAGE_BUCKET=your_storage_bucket
FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
FIREBASE_APP_ID=your_app_id
FIREBASE_MEASUREMENT_ID=your_measurement_id
```
## Dependências
- [Firestore Database](https://www.npmjs.com/package/@firebase/firestore) - Banco de dados NoSQL do Firebase para armazenamento de usuários.
- [Inquirer](https://www.npmjs.com/package/inquirer) - Interface interativa de linhas de comando.

## Funcionalidades

- Manipulação do usuário por prompts.
- Registro de novos usuários armazenando-os no banco de banco e verificação de login.

## Feedback ou Dúvidas

Sinta-se à vontade para enviar feedback ou dúvidas, envie email para ellen_rochafarias@hotmail.com

## Licença

Este projeto está licenciado sob a [Licença MIT](https://opensource.org/licenses/MIT).


## Status do Projeto

Versão mais recente: 1.0.0
Estado: Concluído

## Histórico de Versões

- 1.0.0 (2023-08-10): Versão inicial do projeto.
