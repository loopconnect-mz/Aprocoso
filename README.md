# Website APROCOSO

Este projeto foi construído usando **Astro** e **Sanity CMS**. A arquitetura foca na alta performance (Static Site Generation), escalabilidade e uma excelente experiência de redação no CMS embutido.

## Tecnologias Utilizadas
- **Astro**: Framework web para alta performance (geração de sites estáticos).
- **Sanity CMS**: Headless CMS flexível para gerir o conteúdo institucional e as notícias.
- **Tailwind CSS**: Framework CSS utilitário para estilização rápida e consistente.
- **TypeScript**: Para garantir a tipagem do código e evitar erros na integração de dados.

## Funcionalidades
- **Página Inicial Institucional**: Com as áreas de intervenção, histórico e listagem das últimas notícias.
- **Blog de Notícias**: Páginas geradas estaticamente (`/artigos/[slug]`) e organizadas por categorias (`/categorias/[categoria]`).
- **Sanity Studio Embutido**: Painel de administração acessível diretamente em `/studio`.
- **SEO Otimizado**: Meta tags, Open Graph, esquema JSON-LD, Sitemap gerado automaticamente e URL canónica.

## Requisitos
- Node.js (v18+)

## Instalação e Configuração

### 1. Instalar Dependências
```bash
npm install
```

### 2. Configurar o Sanity CMS
Crie um ficheiro `.env` na raiz do projeto (ou copie o `.env.example`):

```env
PUBLIC_SANITY_PROJECT_ID="******"
PUBLIC_SANITY_DATASET="artigos"
SANITY_API_TOKEN="o_seu_token_de_leitura_ou_escrita_aqui"
```

A APROCOSO forneceu os seguintes detalhes:
- Project ID: `******`
- Dataset: `artigos`
- Token já adicionado durante o desenvolvimento.

### 3. Deploy do Sanity GraphQL (Opcional)
Se preferir usar a API GraphQL em vez do GROQ, pode executar `npx sanity graphql deploy`. No entanto, este projeto utiliza o cliente `@sanity/client` padrão com queries **GROQ**.

## Comandos Disponíveis

### Desenvolvimento Local
Para rodar o projeto localmente:
```bash
npm run dev
```
O servidor Astro será iniciado (normalmente em `http://localhost:4321`).
O painel de edição do Sanity estará acessível em `http://localhost:4321/studio`.

### Construir para Produção (Build)
Para compilar o site final estático:
```bash
npm run build
```
Isto fará o fetching de todos os artigos do Sanity e gerará o HTML otimizado para o diretório `dist/`.

### Visualizar o Build Localmente
```bash
npm run preview
```

## Configuração do Webhook (Rebuild Automático)
Para que o site seja atualizado automaticamente sempre que for publicado um artigo no Sanity, deverá configurar um Webhook no Sanity para o provedor de alojamento (Vercel, Netlify, etc.):
1. Vá a [Sanity Manage](https://www.sanity.io/manage) > Selecione o projeto > API > Webhooks.
2. Adicione um novo Webhook apontando para o URL de "Build Hook" do seu provedor (ex: Vercel).
3. Selecione os triggers de Criação, Atualização e Eliminação de Documentos.
