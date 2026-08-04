<p align="left">
  <img src="https://img.shields.io/badge/Status-Em%20Desenvolvimento-F4A261?style=for-the-badge">
  <img src="https://img.shields.io/badge/Licença-MIT-8D6E63?style=for-the-badge">
</p>

# NextRecipe

Desenvolvimento de um site de receitas para o desafio 2 do Onboarding de projetos da Seed a Bit Tecnologia.

# Estrutura básica do projeto
```
app/
├── layout.tsx         # Layout global com Header e Footer
├── page.tsx           # Landing Page (Server Component)
└── explorar/
    ├── page.tsx       # Vitrine Paginada (Server Component)
    └── loading.tsx    # Feedback visual de carregamento
```
```
[x] Header com navegação (<Link href="/explorar">);
[x] Hero section explicando a proposta do projeto;
[x] Botão de Call to Action (CTA) direcionando para a rota /explorar;
[x] Componente de Filtro/Busca ('use client');
[x] Grid de Cards reutilizáveis (renderizados a partir dos dados da API);
[x] Controles de Paginação ("Anterior" e "Próximo" vinculados ao searchParams).
```

# Detalhes do desenvolvimento
- A busca inicial dos dados foi feita em um Server Component porque o Next.js permite que a requisição seja executada no servidor antes da página ser enviada ao navegador. Isso traz algumas vantagens:
Melhor performance: os dados já chegam renderizados ao usuário, reduzindo o trabalho do navegador.
Menor JavaScript enviado ao cliente: componentes de servidor não precisam ser enviados para execução no browser.
Melhor SEO: o conteúdo da página já está disponível no HTML inicial.
Maior segurança: chamadas de API e lógica de acesso a dados podem permanecer no servidor.
No projeto, a rota /explorar utiliza um Server Component para chamar a função de busca da API e passar os dados para os componentes de interface, como o recipeGrid.

- Atualmente, o RecipeCard é um Client Component, então a funcionalidade de Curtir/Favoritar é adicionada nele utilizando estados do React. Entretanto, pensando em escalabilidade e performance, uma melhoria seria separar essa interação em um componente cliente independente, mantendo os cards como componentes de servidor e enviando para o navegador apenas a parte que necessita de interatividade.

- No projeto, o useState e useEffect foram utilizados em componentes que precisam de comportamento no cliente.
useState é utilizado para armazenar valores que podem mudar durante a interação do usuário, como:
texto digitado na busca;
estado de filtros;
página atual da paginação.
Quando o estado muda através do setPagina, o React realiza uma nova renderização do componente para atualizar a interface. O useEffect é utilizado para executar ações após a renderização, como chamadas de API ou sincronização de dados. Ele evita executar determinados códigos em todas as renderizações, permitindo controlar quando uma ação deve acontecer.

- O projeto utiliza principalmente o método: GET
O método GET foi utilizado para buscar as receitas da API externa: fetch("https://dummyjson.com/recipes")
Ele é adequado porque a aplicação funciona como uma vitrine, onde o usuário apenas consulta informações.
O GET é utilizado porque:
   - não altera dados no servidor;
   - é seguro para consultas;
   - permite carregar informações dinamicamente.

- Algumas informações foram centralizadas para evitar repetição e facilitar manutenção. Por exemplo, a URL da API foi armazenada em uma constante:
const API_URL = "https://dummyjson.com";
Assim, caso a API fosse alterada futuramente, seria necessário modificar apenas um local. Também foi utilizada uma organização por arquivos:
```
src/
 ├── services/
 │    └── api.ts
 │
 ├── types/
 │    └── recipe.ts
```
O arquivo de serviço concentra a lógica de comunicação com a API, enquanto os tipos centralizam as estruturas dos dados.

- A aplicação utiliza design responsivo através do Tailwind CSS. Foram utilizados:
  - Grid responsivo: grid-cols-1 md:grid-cols-2 lg:grid-cols-4
     celular → 1 coluna;
     tablet → 2 colunas;
     desktop → 4 colunas.
  - Classes responsivas do Tailwind, que aplicam estilos diferentes conforme o tamanho da tela:
     text-sm md:text-base lg:text-xl
     Layout flexível com:
     display: flex;
     display: grid;
permitindo que os elementos se reorganizem conforme o espaço disponível.

- O filtro de pesquisa é aplicado através do parâmetro search, enviado pela URL. O componente SearchBar adiciona esse parâmetro na rota /explorar, e o Server Component recebe esse valor através de searchParams. Esse valor é enviado para a função getRecipes, que utiliza o endpoint de busca da API (/recipes/search?q=). Dessa forma, o filtro é realizado pela API sobre o conjunto de receitas disponíveis, e não apenas sobre os itens já carregados na página atual.

- API pública utilizada: DummyJSON "https://dummyjson.com".

# Como rodar o projeto localmente

Primeiro, baixe o repositório na sua máquina e indique a pasta com os comandos no terminal (isso é necessário pois o projeto foi criado dentro de outra pasta):
```
cd next-recipe
# and
dir
```
Segundo, rode o servidor de desenvolvimento no terminal com os comandos:

```
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Terceiro, abra [http://localhost:3000](http://localhost:3000) com seu navegador e veja o resultado.

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
