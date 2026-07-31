# 📖NextRecipe
Desenvolvimento de uma vitrine de receitas para o desafio 2 do Onboarding de projetos da Seed a Bit Tecnologia.

# 🏗️Estrutura do projeto
```
app/
├── layout.tsx         # Layout global com Header e Footer
├── page.tsx           # Landing Page (Server Component)
└── explorar/
    ├── page.tsx       # Vitrine Paginada (Server Component)
    └── loading.tsx    # Feedback visual de carregamento
```

[] Header com navegação (<Link href="/explorar">);
[] Hero section explicando a proposta do projeto;
[] Botão de Call to Action (CTA) direcionando para a rota /explorar;
[] Componente de Filtro/Busca ('use client');
[] Grid de Cards reutilizáveis (renderizados a partir dos dados da API);
[] Controles de Paginação ("Anterior" e "Próximo" vinculados ao searchParams).

# ❓Perguntas de reflexão
1. *Por que a busca inicial dos dados na rota `/explorar` foi feita em um Server Component em vez de um Client Component?*
2. *Se precisarmos adicionar um botão de "Curtir / Favoritar" dentro de cada Card da vitrine, como você estruturaria esse componente mantendo a performance da aplicação?*
3. Em sua implementação, como você usou o useState e useEffect? Como eles impactam as renderizações do sistema?
4. Quais métodos HTTP foram utilizados e por que o projeto utiliza principalmente o método `GET`?
5. Foram usadas variáveis centralizadas no código? Como você implementou isso?
6. Como a aplicação se adapta a telas de celular, tablet e desktop? Quais mecanismos você utilizou para isso?
7. O filtro é aplicado apenas aos itens da página atual ou a todos os itens disponíveis na API?

# 📦Entregáveis
1. Instruções para rodar o projeto localmente (`npm run dev`).
2. Nome e link da API utilizada.
3. Resposta das perguntas de reflexão.

# 🚀Getting Started

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
