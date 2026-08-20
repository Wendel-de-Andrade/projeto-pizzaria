# Projeto Pizzaria 🍕

Aplicação full stack para gerenciamento de pedidos de uma pizzaria, com autenticação, catálogo de produtos, categorias e fluxo de pedidos.

## Visão geral

O projeto possui back-end em Node.js/TypeScript com API REST, autenticação via JWT, persistência em PostgreSQL usando Prisma ORM e front-end em Next.js/React.

### Principais funcionalidades

- Autenticação de usuários com JWT e hash de senha
- Cadastro e consulta de categorias e produtos
- Upload de imagens de produtos
- Criação e gerenciamento de pedidos
- Relacionamento entre pedidos, itens, produtos e categorias
- Consumo da API pelo front-end em Next.js
- Organização do front-end em `app`, `components`, `contexts` e `services`

## Stack

### Back-end

- Node.js
- TypeScript
- Express
- PostgreSQL
- Prisma ORM
- JWT
- bcryptjs
- Multer

### Front-end

- Next.js 14
- React 18
- TypeScript
- Axios
- Sass/SCSS
- Context API

## Estrutura

```text
projeto-pizzaria/
├── backend/
│   ├── prisma/
│   └── src/
└── frontend/
    └── src/
        ├── app/
        ├── components/
        ├── contexts/
        └── services/
```

## Banco de dados

O schema utiliza PostgreSQL e Prisma, com entidades para usuários, categorias, produtos, pedidos e itens. Os relacionamentos permitem vincular produtos a categorias e itens a pedidos/produtos.

## Como executar

### Back-end

1. Entre em `backend`.
2. Instale as dependências.
3. Configure `DATABASE_URL` no ambiente.
4. Execute as migrations do Prisma.
5. Inicie com:

```bash
npm run dev
```

### Front-end

1. Entre em `frontend`.
2. Instale as dependências.
3. Inicie com:

```bash
npm run dev
```

O front-end utiliza Next.js e consome a API do projeto.

## Demonstração

[Vídeo de demonstração no YouTube](https://youtu.be/dH_NEiL7zJk)

## Próximos passos

- Adicionar testes automatizados de API e componentes
- Adicionar pipeline de CI
- Documentar variáveis de ambiente com `.env.example`
- Preparar deploy público da aplicação

## Licença

MIT
