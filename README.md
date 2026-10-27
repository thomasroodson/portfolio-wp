# Portfolio — Next.js + WordPress

A front-end portfolio built with Next.js that uses WordPress as a headless CMS. The site requests content through the WordPress GraphQL API, maps the returned data into UI components, and renders sections such as the introduction, skills, navigation, and project cards.

The goal of this setup is to keep presentation and content management separate: the interface lives in Next.js, while editable portfolio content is managed in WordPress.

## Implementation highlights

- Next.js App Router with React and TypeScript
- WordPress content fetched through GraphQL and Apollo Client
- Typed query results and project mapping helpers
- Reusable portfolio sections and components
- Server-side metadata with a fallback when CMS data is unavailable
- Webhook-triggered revalidation for content updates
- Styled Components for component styling

## Tech stack

- Next.js 16
- React 19
- TypeScript
- WordPress GraphQL
- Apollo Client
- Styled Components
- Motion
- Lucide React

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Configure the WordPress GraphQL endpoint and any required webhook settings using environment variables. Keep real tokens and private endpoints out of committed files.

## Build

```bash
npm run build
npm start
```

---

This repository focuses on the front-end application and its integration with a headless WordPress content source.
