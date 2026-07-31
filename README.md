<p align="left">
  <img src="https://img.shields.io/badge/Status-Em%20Desenvolvimento-F4A261?style=for-the-badge">
  <img src="https://img.shields.io/badge/Licença-MIT-8D6E63?style=for-the-badge">
</p>

# NextRecipe

Desenvolvimento de uma vitrine de receitas para o desafio 2 do Onboarding de projetos da Seed a Bit Tecnologia.

# Estrutura do projeto
```
app/
├── layout.tsx         # Layout global com Header e Footer
├── page.tsx           # Landing Page (Server Component)
└── explorar/
    ├── page.tsx       # Vitrine Paginada (Server Component)
    └── loading.tsx    # Feedback visual de carregamento
```
```
[] Header com navegação (<Link href="/explorar">);
[] Hero section explicando a proposta do projeto;
[] Botão de Call to Action (CTA) direcionando para a rota /explorar;
[] Componente de Filtro/Busca ('use client');
[] Grid de Cards reutilizáveis (renderizados a partir dos dados da API);
[] Controles de Paginação ("Anterior" e "Próximo" vinculados ao searchParams).
```

# Perguntas de reflexão
1. *Por que a busca inicial dos dados na rota `/explorar` foi feita em um Server Component em vez de um Client Component?*
2. *Se precisarmos adicionar um botão de "Curtir / Favoritar" dentro de cada Card da vitrine, como você estruturaria esse componente mantendo a performance da aplicação?*
3. Em sua implementação, como você usou o useState e useEffect? Como eles impactam as renderizações do sistema?
4. Quais métodos HTTP foram utilizados e por que o projeto utiliza principalmente o método `GET`?
5. Foram usadas variáveis centralizadas no código? Como você implementou isso?
6. Como a aplicação se adapta a telas de celular, tablet e desktop? Quais mecanismos você utilizou para isso?
7. O filtro é aplicado apenas aos itens da página atual ou a todos os itens disponíveis na API?

# Entregáveis
1. Instruções para rodar o projeto localmente (`npm run dev`).
2. Nome e link da API utilizada.
3. Resposta das perguntas de reflexão.

# Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.


# Tecnologias Utilizadas

![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![DummyJSON API](https://img.shields.io/badge/DummyJSON_API-FF6B35?style=for-the-badge&logo=json&logoColor=white)
![ESLint](https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white)
![npm](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)
![Figma](https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white)
![Visual Studio Code](https://img.shields.io/badge/VS_Code-007ACC?style=for-the-badge&logo=visualstudiocode&logoColor=white)
![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white)
![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)
