# 📖ShelfReceitas
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
