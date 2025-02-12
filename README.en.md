# Frontend Mentor - Shortly - URL shortening API Challenge solution

This is a solution to the [Shortly URL shortening API Challenge challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/url-shortening-api-landing-page-2ce3ob-G). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)

## Overview

### The challenge

Users should be able to:

- [x] View the optimal layout for the site depending on their device's screen size  
- [x] Shorten any valid URL  
- [x] See a list of their shortened links, even after refreshing the browser  
- [x] Copy the shortened link to their clipboard in a single click  
- [x] Receive an error message when the `form` is submitted if:
  - The `input` field is empty

### Links

- Solution URL: Click [here](https://www.frontendmentor.io/solutions/frontend-mentor---shortly---url-shortening-api-challenge-solution-oehgnzpSLi)
- Live Site URL: Click [here](https://url-shortening-seven-ashy.vercel.app/)

## My process

### Built with

- React + TypeScript with Vite
- Tailwind
- Flexbox
- Mobile-first workflow
- Zustand
- MSW


### What I learned

This project helped me improve my flexbox skills, as well as state management with Zustand and mocks with MSW.
Besides that, I also learned Atomic Design principles, as you can see in the project's structure:

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
