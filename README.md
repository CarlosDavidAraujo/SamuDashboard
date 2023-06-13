# SamuDashboard

Este é um aplicativo de dashboard desenvolvido com Node.js, Express e React.

## Instalação

Siga estas instruções para configurar o aplicativo em seu ambiente local.

### Pré-requisitos

- Node.js (versão 12 ou superior) instalado em seu sistema.
- Git instalado em seu sistema.

### Passo 1: Clonar o repositório

```
git clone https://github.com/CarlosDavidAraujo/SamuDashboard.git
```

### Passo 2: Configurar as variáveis de ambiente

Navegue até a pasta `server` do projeto e crie um arquivo chamado `.env` com as seguintes variáveis de ambiente:

```
DB_SERVER=<HOST_DO_BANCO_DE_DADOS>
DB_DATABASE=<NOME_DO_BANCO_DE_DADOS>
DB_USER=<USUÁRIO_DO_BANCO_DE_DADOS>
DB_PASSWORD=<SENHA_DO_BANCO_DE_DADOS>

HOST=<HOST_DA_APLICAÇÃO>
PORT=<PORTA_DA_APLICAÇÃO>
```

Navegue até a pasta `client` do projeto e crie um arquivo chamado `.env` com as seguintes variáveis de ambiente:

```
REACT_APP_API_URL= <HTTP_URL_DO_SERVER> ex: http://HOST:PORT
REACT_APP_SOCKET_API_URL= <WS_URL_DO_SERVER> ex: ws://HOST:PORT
```
`HOST` e `PORT` devem ser os mesmo usados no arquivo .env da pasta server


### Passo 3: Instalar as dependências

Navegue até a pasta `server` e execute o comando abaixo para instalar as dependências do servidor:

`npm install`

Em seguida, navegue até a pasta `client` e execute o comando abaixo para instalar as dependências do cliente:

`npm install`


### Passo 4: Executar o aplicativo

Navegue até a pasta `client` e execute o seguinte comando para criar uma build do frontend:

`npm run build`

Quando o processo de build encerrar copie a pasta build presente na pasta client para a pasta server (pode substituir a pasta existente)

Navegue até a pasta `server`, execute o seguinte comando para iniciar o servidor:

`npm start`

Agora é só acessar o Host do servidor no navegador






