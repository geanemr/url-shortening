# Frontend Mentor - Shortly - Solução do desafio API encurtadora de URLs

Essa é uma solução do [Desafio de encurtador de URLs do Frontend Mentor](https://www.frontendmentor.io/challenges/url-shortening-api-landing-page-2ce3ob-G). Desafios do Frontend Mentor auxiliam nas habilidades de programação ao construir projetos realísticos.

## Tabela de conteúdos

- [Visão Geral](#visão-geral)
  - [O desafio](#o-desafio)
  - [Links](#links)
- [Meu Processo](#meu-processo)
  - [Desenvolvido com](#desenvolvido-com)
  - [O que eu aprendi](#o-que-eu-aprendi)

## Visão Geral

### O desafio

Os usuários devem ser capazes de:

- [x] Ver o layout otimizado do site dependendo do tamanho da tela do dispositivo  
- [x] Encurtar qualquer URL válida  
- [x] Ver uma lista dos seus links encurtados, mesmo depois de dar refresh no browser  
- [x] Copiar o link encurtado com apenas um click  
- [x] Receber uma mensagem de erro quando o `formulário` for submetido se:
  - A área de  `input` estiver vazia

### Links

- URL da solução: Click [aqui](https://www.frontendmentor.io/solutions/frontend-mentor---shortly---url-shortening-api-challenge-solution-oehgnzpSLi)
- URL do site: Clique [aqui](https://url-shortening-seven-ashy.vercel.app/)

## Meu Processo

### Desenvolvido com

- React + TypeScript com Vite
- Tailwind
- Flexbox
- Fluxo de desenvolvimento focado em dispositivos móveis
- Zustand
- MSW

### O que eu aprendi

Este projeto me ajudou a melhorar minhas habilidades com flexbox, bem como o gerenciamento de estado com Zustand e mocks com MSW. Além disso, também aprendi sobre os princípios do Atomic Design, como você pode ver na estrutura deste projeto:

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


