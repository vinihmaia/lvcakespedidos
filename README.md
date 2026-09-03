# LV Cakes — Next.js

Site estático da LV Cakes empacotado como projeto Next.js, pronto para deploy na Vercel.

## Rodar localmente

```bash
npm install
npm run dev
```

Abra http://localhost:3000

## Deploy na Vercel

1. Suba esta pasta para um repositório no GitHub (ou use `npm i -g vercel` e rode `vercel` dentro da pasta).
2. Na Vercel: **Add New → Project → Import** o repositório. A Vercel detecta Next.js automaticamente.
3. Clique em **Deploy**.

## Conectar seu domínio próprio

1. Na Vercel, abra o projeto → **Settings → Domains**.
2. Digite seu domínio (ex.: `lvcakes.com.br`) e clique em **Add**.
3. No seu registrador (Registro.br, GoDaddy etc.), crie os registros que a Vercel mostrar:
   - **A** `@` → `76.76.21.21`
   - **CNAME** `www` → `cname.vercel-dns.com`
4. Aguarde a propagação. O HTTPS é automático.
