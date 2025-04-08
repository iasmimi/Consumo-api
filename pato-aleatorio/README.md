Documentação do Projeto: Aplicativo dos Patos 🦆 

1. Introdução 

Este projeto é uma aplicação web divertida e educativa que utiliza a API pública Random Duck para exibir imagens aleatórias de patos. O sistema foi desenvolvido com foco em boas práticas de componentização, estilo e interatividade. 

2. Objetivo da Aplicação 

O objetivo do projeto é apresentar uma aplicação web funcional e bonita que consome dados de uma API, exibindo imagens de patos junto com informações educativas sobre eles, de forma aleatória e interativa. 

3. Tecnologias Utilizadas 

- React.js 
- Node.js 
- Express.js 
- Axios 
- HTML e CSS 
- JavaScript 
- API Random Duck 

4. Estrutura de Pastas 

 
pato-aleatorio/
├── public/
│   ├── index.html
│   ├── favicon.ico
│   └── sounds/
│       └── quack.mp3
│
├── src/
│   ├── components/
│   │   ├── DuckImage.jsx
│   │   ├── DuckInfo.jsx
│   │   └── Button.jsx
│   │
│   ├── constants/
│   │   └── duckFacts.js
│   │
│   ├── services/
│   │   └── api.js
│   │
│   ├── styles/
│   │   ├── App.css
│   │   └── components/
│   │       ├── duck.css
│   │       └── buttons.css
│   │
│   ├── App.js
│   └── index.js
│
├── package.json
└── README.md

5. Funcionalidades Implementadas 

 
• Exibição de imagem aleatória de pato usando a API Random Duck. 
• Informações educativas trocadas junto com a imagem (habitat, alimentação, natação). 
• Botão para trocar a imagem e as informações do pato. 
• Contador de quantos patos o usuário já viu. 
• Botão "Curtir esse pato", que soma os likes dados. 
• Animação leve ao trocar a imagem (fade-in). 
• Ícone de pato no topo.  
• Estilização com cores suaves (amarelo claro e rosa claro). 
 

6. Como Rodar o Projeto 

 
1. Extraia o projeto da pasta ZIP. 
2. No terminal, vá até a pasta `pato-aleatorio` e execute: 
   npm install 
   npm start
3. Acesse o app no navegador em http://localhost:3000 
 

7. Extras do Projeto 

• Estilo visual agradável e colorido. 
• Animação suave na troca de imagem. 
 
 

8. Autoria 

Feito por Iasmin Aicha Martins da Silva - Turma do SENAI 