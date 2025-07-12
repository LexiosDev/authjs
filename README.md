# Sistema de Login com Auth.js (Google)

Pequeno sistema de login usando [Auth.js](https://authjs.dev/) com autenticação via Google, desenvolvido com [Next.js](https://nextjs.org/) e estilizado com [Tailwind CSS](https://tailwindcss.com/).

## Tecnologias

- Next.js
- Tailwind CSS
- Auth.js (NextAuth)

## Funcionalidades

- Login com conta Google
- Sessão autenticada com persistência
- Proteção de rotas

## Instalação

```bash
# Instalar dependências
npm install

# Rodar o projeto em modo de desenvolvimento
npm run dev
```

## Configuração

Crie um arquivo `.env.local` na raiz do projeto com as seguintes variáveis:

```env
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
NEXTAUTH_SECRET=uma_chave_secreta
NEXTAUTH_URL=http://localhost:3000
```

> Obs: Você pode gerar o `NEXTAUTH_SECRET` com `openssl rand -base64 32` ou usando um gerador online.

## Estrutura Básica

- `/pages/api/auth/[...nextauth].ts` – Configuração do Auth.js com provedor Google
- `/pages/index.tsx` – Página inicial
- `/pages/protected.tsx` – Exemplo de rota protegida
- `/components/Navbar.tsx` – Exibe login/logout e informações da sessão

## Licença

MIT
