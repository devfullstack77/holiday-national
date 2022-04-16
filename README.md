# API- Listar os Feriados Nacionais e ajudar identificar o dia útil.


## Descrição

Para facilitar o uso de aplicações que realizam calculos referente aos dias uteis da semana.


## Objetivo
Obter os principais feriados nacionais tendo como retorno um objeto json.


## 🚀 Tecnologias utilizadas

- [Node.js](https://nodejs.org/en/) Version >= v14.19.1
- [NVM] Node Version Manager
- [Nodemon](https://www.npmjs.com/package/nodemon)
- [nager.date](https://date.nager.at)


## Recomendado
Instalar do versionador NVM ( Node Version Manager) para o NodeJs NVM:

Comandos

```bash
nvm ls shows the node versions you installed
nvm ls-remote shows all the node versions available17.8.0
nvm install <version> installs the specified version
nvm uninstall <version> works like the install command
nvm alias default <version> sets your default node version
nvm use <version> set version to used
```

## 🎲 Instalação

Instalando as dependências da aplicação

```bash
  yarn
```
 ou
```
  npm install
```

## ✨ Iniciando a aplicação

```bash
$ yarn start

# watch mode
$ yarn start-w
```
OU

```bash
$ npm run start

# watch mode
$ npm run start-w
```
Deverá rodar na porta 5000

```bash
   http://localhost:5000
```


## ✅ Rotas da aplicação

#### Health da aplicação
```bash
  http://localhost:5000/
```
Resultado:
```bash
{
    "data": {
        "status": "Ok"
    }
}
```

#### Listar todos os feriados no ano.

```bash
  http://localhost:5000/api/v1/national-holidays?year=2022&country=BR
```
Resultado:

```bash
    "data": [
        {
            "date": "2022-01-01",
            "localName": "Confraternização Universal",
            "name": "New Year's Day",
            "countryCode": "BR",
            "fixed": true,
            "global": true,
            "counties": null,
            "launchYear": null,
            "type": "Public"
        },
        .....
```

#### Verificando o dia util

```bash
  http://localhost:5000/api/v1/business-day?date=2022-04-15&country=BR
```

Resultado: Identificando o feriado.
```bash

{
    "data": {
        "isBusinessDay": false,   //Informa se é dia util.
                                  //No exemplo é um dia de semana mas tem feriado.
        "dayOfWeekName": "friday",
        "national_Holiday": [     // Carregando as informações do feriado
            {
                "date": "2022-04-15",
                "localName": "Sexta feira Santa",
                "name": "Good Friday",
                "countryCode": "BR",
                "fixed": false,
                "global": true,
                "counties": null,
                "launchYear": null,
                "type": "Public"
            }
        ]
    }
}
```

```bash
  http://localhost:5000/api/v1/business-day?date=2022-04-11&country=BR
```
Resultado: Não tem feriado.
```bash
{
    "data": {
        "isBusinessDay": true,
        "dayOfWeekName": "monday",
        "national_Holiday": []
    }
}
```
## Estrutura das pastas

```bash
.
├── img
├── index.js
├── package.json
├── README.md
├── src
│   ├── server
│   │   └── api
│   │       ├── controllers
│   │       │   ├── businessday-controller.js
│   │       │   ├── helpers.js
│   │       │   ├── holidays-controller.js
│   │       │   └── index.js
│   │       ├── index.js
│   │       └── routes
│   │           └── index.js
│   └── services
│       ├── businessday-service.js
│       ├── holidays-service.js
│       ├── index.js
│       └── util.js
└── yarn.lock
```