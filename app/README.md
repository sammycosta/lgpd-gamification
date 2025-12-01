# LGPD Gamification

Plataforma gamificada para ensino e conscientização sobre a Lei Geral de Proteção de Dados (LGPD).
Desenvolvido como Trabalho de Conclusão de Curso (TCC).

> **Acesse em Produção:** [https://lgpd-gamificada.onrender.com/](https://lgpd-gamificada.onrender.com/)
>
> **Observação:** O projeto está hospedado no plano gratuito do Render. Por isso, pode levar **alguns minutos** para carregar inicialmente após períodos de inatividade (Cold Start dos serviços de Frontend e Backend). 

## Tecnologias

Este projeto foi **inicializado** com a **Better-T-Stack** e utiliza uma arquitetura moderna focada em TypeScript e performance:

- **Frontend**: Next.js 15, React 19, TailwindCSS, Mantine UI.
- **Backend**: Next.js (API Routes), tRPC, Better-Auth.
- **Database**: SQLite (Turso/Local), Drizzle ORM.
- **Runtime**: Bun.

## Configuração e Instalação

### 1. Pré-requisitos

Certifique-se de ter o [Bun](https://bun.sh/) instalado em sua máquina.

### 2. Instalação

Clone o repositório e instale as dependências:

```bash
bun install
```

### 3. Variáveis de Ambiente

Você precisa configurar as variáveis de ambiente. Crie um arquivo `.env` em `apps/server` e `apps/web` baseando-se nos exemplos (`.env.example`).

**Principais Variáveis (Server):**

- `BETTER_AUTH_URL`: URL base da autenticação (Em produção, deve ser a URL do **Frontend**).
- `GOOGLE_CLIENT_ID` / `GOOGLE_CLIENT_SECRET`: Credenciais do Google Cloud Console.
- `TURSO_DATABASE_URL` / `TURSO_AUTH_TOKEN`: Credenciais do banco de dados (ou use arquivo local).
- `CORS_ORIGIN`: URL do Frontend permitida.

**Principais Variáveis (Web):**

- `NEXT_PUBLIC_SERVER_URL`: URL do Backend.
- `NEXT_PUBLIC_WEB_URL`: URL do Frontend.

### 4. Banco de Dados

Para rodar localmente com SQLite:

```bash
# Inicie o banco local (em um terminal separado)
cd apps/server && bun db:local

# Aplique as migrações e o seed (dados iniciais)
cd apps/server && bun db:push
cd apps/server && bun db:seed
```

### 5. Rodando o Projeto

Na raiz do projeto:

```bash
bun dev
```

- **Web**: http://localhost:3001
- **Server**: http://localhost:3000

## Deploy e Arquitetura

### Proxy Reverso (BFF)

Para resolver problemas de cookies de terceiros (Third-Party Cookies) e CORS, o projeto utiliza uma arquitetura de Proxy Reverso configurada no Next.js.

- O Frontend (`apps/web`) atua como um proxy para as rotas de autenticação (`/api/auth`) e API (`/trpc`).
- Isso garante que os cookies sejam tratados como **Same-Origin** (`SameSite: Lax`), aumentando a segurança e compatibilidade com navegadores como Safari e Firefox.

### Configuração em Produção (Render)

Ao fazer deploy (ex: Render.com), atente-se:

1. **Server**: A variável `BETTER_AUTH_URL` deve apontar para a URL do **Frontend** (ex: `https://seu-app.onrender.com`), pois é por lá que o fluxo de auth começa e termina.
2. **Web**: A variável `NEXT_PUBLIC_SERVER_URL` deve apontar para a URL do **Backend**.
3. **Google Console**: A "Authorized redirect URI" deve ser a do **Frontend** (`https://seu-app.onrender.com/api/auth/callback/google`).

## Estrutura do Projeto

```text
app/
├── apps/
│   ├── web/         # Frontend application (Next.js + Mantine)
│   └── server/      # Backend API (Next.js + tRPC + Better-Auth)
```

## Scripts Disponíveis

- `bun dev`: Inicia todas as aplicações em modo de desenvolvimento.
- `bun build`: Build de todas as aplicações.
- `bun db:push`: Atualiza o schema do banco de dados.
- `bun db:studio`: Abre a interface visual do Drizzle para gerenciar o banco.
