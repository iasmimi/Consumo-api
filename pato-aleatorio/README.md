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

 
duck_app_final/ 
│ 
├── client/                 # Front-end (React) 
│   ├── public/ 
│   ├── src/ 
│   │   ├── components/ 
│   │   ├── App.js 
│   │   └── index.js 
│   └── package.json 
│ 
├── server/                 # Back-end (Node + Express) 
│   ├── index.js 
│   └── package.json 
 

5. Funcionalidades Implementadas 

 
• Exibição de imagem aleatória de pato usando a API Random Duck. 
• Informações educativas trocadas junto com a imagem (habitat, alimentação, curiosidade). 
• Botão para trocar a imagem e as informações do pato. 
• Contador de quantos patos o usuário já viu. 
• Botão "Curtir esse pato", que soma os likes dados. 
• Animação leve ao trocar a imagem (fade-in). 
• Ícone de pato no topo. 
• Rodapé com nome e turma. 
• Estilização com cores suaves (amarelo claro e rosa claro). 
• Responsivo para funcionar bem no celular. 
• Opção de som “quack!” (caso desejado). 
 

6. Como Rodar o Projeto 

 
1. Extraia o projeto da pasta ZIP. 
2. No terminal, vá até a pasta `server` e execute: 
   npm install 
   node index.js 
3. Em outro terminal, vá até a pasta `client` e execute: 
   npm install 
   npm start 
4. Acesse o app no navegador em http://localhost:3000 
 

7. Extras do Projeto 

 
• Estilo visual agradável e colorido. 
• Layout responsivo para celulares. 
• Animação suave na troca de imagem. 
• Possível adição de som de pato na troca. 
 

8. Autoria 

Feito por Iasmin Aicha Martins da Silva - Turma do SENAI 