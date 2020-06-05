<h1 align="center">
<img src="https://github.com/luiz21goncalves/ecoleta/raw/master/assets/Post.png" width="500">
</h1>

<blockquote align="center">“O aprendizado é contínuo e sempre haverá um próximo nível”</blockquote>

## O que será desenvolvido
- Na semana internacional do Meio Ambiente nasce o Ecoleta.
- **Ecoleta** foi dividido em três partes, **servidor**(back end), **web** e **mobile** (front end). Sua proposta  e ajudar no recolhimento de resíduos recicláveis, facilitando às pessoas a encontrarem pontos de coletas do material a ser descartado.

## o que já foi desenvolvido

 - [x] api rest - utilizando **express, knexjs, multer, celebrate, sqlite e typescript**
 - [x] interface web - utilizando **react, axios, leaflet**
 - [x] aplicativo mobile - utilizando **react-native, expo, react-native-maps, axios, mail-composer**

## Interface Web
Nela é feito o cadastro dos pontos de coleta. Onde é trabalhado a lógica do envio de images.

## Aplicativo mobile
Nele pessoas podem encontrar pontos de  coleta baseado em estado, cidade e tipo de resíduo, exibindo os pontos de coleta no mapa.

<h1 align="center">
<img src="https://github.com/luiz21goncalves/ecoleta/raw/master/assets/capa.png" heigth="500">
</h1>

## Rodando na sua máquina
Você vai precisar intalar:
- [ ] [node](https://nodejs.org/)
- [ ] [expo-cli](https://expo.io/learn)
- [ ] app expo instalado no seu celular

```bash
  # Clonar o repositório
  $ git clone https://github.com/luiz21goncalves/ecoleta.git

  # Entrar na pasta server
  $ cd server

  # Instale as depenedências
  $ npm install ou npm i

  # Criar e popular banco de dados
  $ npm run knex:migrate
  $ npm run knex:seed

  # Iniciar servidor
  $ npm run dev

  # abra outra aba do terminal ou outro terminal

  # Navegue até a pasta ecoleta então entre na pasta web
  $ cd web

  # Instale as depenedências
  $ npm install ou npm i

  # Iniciar a inteface  web
  $ npm start

  # Seu navegador irá abrir rodando o projeto é so usar mas lembre de conferir se o server ainda está rodando.

  # abra outra aba do terminal ou outro terminal

  # Navegue até a pasta ecoleta então entre na pasta mobile
  $ cd mobile

  # Instale as depenedências
  $ npm install ou npm i

  # Iniciar o projeto
  $ npm start

  # Uma aba irá abir no seu navegador, abra o app expo no seu celular e escaneio o QR Code do navegador. Lembre de conferir se o server ainda está rodando.
```