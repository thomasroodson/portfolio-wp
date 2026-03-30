# 🧠 Projeto: Portfólio — Next.js + WordPress (Headless)

## 📌 Visão Geral
Projeto com Next.js (App Router), SSG, ISR, WordPress Headless (GraphQL) e Styled Components.

---

## 🎯 Objetivos
- Alta performance
- SEO otimizado
- Código escalável
- Baixo acoplamento com CMS

---

## 🏗️ Estrutura
src/
  app/
  components/
  lib/
  styles/

---

## 🧩 Componentes
Padrão:
Component/
  index.tsx
  styles.ts
  types.ts

Responsabilidades:
- index.tsx → lógica + JSX
- styles.ts → estilos
- types.ts → tipagem

---

## 🎨 Estilos
- Styled Components
- Import padrão: import * as S from './styles'

---

## 🧠 Tipagem
- Nunca usar any
- Usar interfaces

---

## ⚙️ GraphQL
- Fetch server-side
- cache: 'force-cache'

---

## 🌍 Renderização
- SSG padrão
- ISR com revalidate

---

## 🔔 Webhook
- revalidatePath('/')

---

## 🎬 Animações
- Apenas client
- Nunca esconder conteúdo

---

## 🧱 Layout
- layout.tsx obrigatório

---

## 🔒 Env
.env.local:
NEXT_PUBLIC_WP_API=
REVALIDATE_SECRET=

---

## 🧪 Qualidade
- ESLint
- Prettier

---

## 🚀 Boas práticas
✔ Componentes pequenos  
✔ Tipagem forte  
✔ Separação de responsabilidades  

❌ Evitar any  
❌ Evitar fetch no client  

---

## 💬 Resumo
SSG + ISR + GraphQL + Styled Components + Arquitetura modular
