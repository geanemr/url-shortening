# Frontend Mentor - Shortly URL shortening API Challenge solution


- [EN](#en)
- [PT](#pt)
- [Project's Atomic Design](#projects-atomic-design)
- [Links](#links)


## EN

This is a solution to the [Shortly URL shortening API Challenge challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/url-shortening-api-landing-page-2ce3ob-G). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)

## Overview

### The challenge

Users should be able to:

[x] View the optimal layout for the site depending on their device's screen size  
[x] Shorten any valid URL  
[x] See a list of their shortened links, even after refreshing the browser  
[x] Copy the shortened link to their clipboard in a single click  
[x] Receive an error message when the `form` is submitted if:
  - The `input` field is empty


## My process

### Built with

- React + TypeScript with Vite
- Tailwind
- Flexbox
- Mobile-first workflow
- Zustand
- MSW


### What I learned

This project helped me improve my flexbox skills, as well as state management with Zustand and mocks with MSW. Besides that, I also learned Atomic Design principles.

## PT

Essa é uma solução do [Desafio de encurtador de URLs do Frontend Mentor](https://www.frontendmentor.io/challenges/url-shortening-api-landing-page-2ce3ob-G). Desafios do Frontend Mentor auxiliam nas habilidades de programação ao construir projetos realísticos.

## Tabela de conteúdos

- [Visão Geral](#visão-geral)
  - [O desafio](#o-desafio)
- [Meu Processo](#meu-processo)
  - [Desenvolvido com](#desenvolvido-com)
  - [O que eu aprendi](#o-que-eu-aprendi)

## Visão Geral

### O desafio

Os usuários devem ser capazes de:

[x] Ver o layout otimizado do site dependendo do tamanho da tela do dispositivo  
[x] Encurtar qualquer URL válida  
[x] Ver uma lista dos seus links encurtados, mesmo depois de dar refresh no browser  
[x] Copiar o link encurtado com apenas um click  
[x] Receber uma mensagem de erro quando o `formulário` for submetido se:
  - A área de  `input` estiver vazia


## Meu Processo

### Desenvolvido com

- React + TypeScript com Vite
- Tailwind
- Flexbox
- Fluxo de desenvolvimento focado em dispositivos móveis
- Zustand
- MSW

### O que eu aprendi

Este projeto me ajudou a melhorar minhas habilidades com flexbox, bem como o gerenciamento de estado com Zustand e mocks com MSW. Além disso, também aprendi sobre os princípios do Atomic Design.

### Project's Atomic Design

```plaintext
url-shortening/
├── src/
│ ├── components/
│ │ ├── atoms/
│ │ │ ├── button/
│ │ │ │ └── button.tsx
│ │ │ ├── image/
│ │ │ │ └── image.tsx
│ │ │ └── input/
│ │ │ └── input.tsx
│ │ ├── molecules/
│ │ │ ├── footerNavBar/
│ │ │ │ └── footerNavBar.tsx
│ │ │ ├── form/
│ │ │ │ └── form.tsx
│ │ │ ├── getStarted/
│ │ │ │ └── getStarted.tsx
│ │ │ ├── infoButtons/
│ │ │ │ └── infoButtons.tsx
│ │ │ ├── loginButtons/
│ │ │ │ └── loginButtons.tsx
│ │ │ └── urlList/
│ │ │ └── urlList.tsx
│ │ ├── organisms/
│ │ │ ├── footer/
│ │ │ │ └── footer.tsx
│ │ │ ├── heroSection/
│ │ │ │ └── heroSection.tsx
│ │ │ ├── menu/
│ │ │ │ └── menuDesktop.tsx
│ │ │ │ └── menuMobile.tsx
│ │ │ └── statistics/
│ │ │ └── statistics.tsx
│ │ ├── templates/
│ │ │ └── defaultTemplate/
│ │ │ └── defaultTemplate.tsx
│ │ └── pages/
│ │ └── home/
│ │ └── home.tsx
│ ├── hooks/
│ │ ├── useCopy.ts
│ │ ├── useFetch.ts
│ │ └── useScreenSize.ts
│ ├── mocks/
│ │ ├── browser.ts
│ │ └── handler.ts
│ ├── stores/
│ │ └── urlstore.ts
│ ├── types/
│ │ └── url.ts
│ ├── App.css
│ ├── App.tsx
│ └── main.tsx
├── public/
│ └── index.html
├── package.json
├── tailwind.config.js
└── postcss.config.js
```

### Links
- Solution: [Add solution URL here](https://your-solution-url.com)
- Site: [Add live site URL here](https://your-live-site-url.com)