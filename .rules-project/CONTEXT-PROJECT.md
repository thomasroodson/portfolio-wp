# 📌 Project Context — Portfolio (Headless CMS)

## 🧠 Overview

This project is a personal portfolio built using a **headless architecture**, where content is managed through WordPress and consumed by a modern frontend application.

The main goal is to create a high-performance, scalable, and maintainable application using static rendering and incremental updates.

---

## 🏗️ Architecture

### Backend (CMS)

- WordPress is used as a **Headless CMS**
- Data is exposed via **GraphQL API**
- Main content types:
  - Projects (posts)
  - About information
  - Skills
  - Experience

---

### Frontend

- Framework: **Next.js**
- Styling: **styled-components**
- Data fetching: **Apollo Client + GraphQL**

The frontend is responsible for:
- Rendering static content
- Fetching data from the GraphQL API
- Displaying projects as dynamic posts

---

## ⚡ Data Fetching Strategy

### SSG (Static Site Generation)

- Main pages are generated at build time
- Ensures high performance and strong SEO

### ISR (Incremental Static Regeneration)

- Pages are automatically revalidated after a defined interval
- Allows content updates without full rebuilds

---

## 🔁 Revalidation Flow (Webhook)

- When a new post is published in WordPress:
  1. A webhook is triggered
  2. Next.js receives the event
  3. Only the affected content is revalidated

Goal:
- Avoid full application rebuilds
- Update only newly created or modified posts

---

## 🧩 Content Structure

### Projects

- Treated as **posts**
- Expected fields:
  - title
  - slug
  - excerpt (short description)
  - content
  - featured image

---

## 🎨 UI & Design

- Based on a custom **Design System**
- Tokens defined in JSON (colors, spacing, typography)
- Applied using styled-components

---

## 🔗 Integration

The frontend consumes data through:
- GraphQL queries
- Apollo Client for state management and caching

---

## 🚀 Goals

- Build a modern and performant portfolio
- Demonstrate expertise in headless architecture
- Ensure scalability and maintainability
- Apply modern frontend best practices

---

## 📌 Notes

- The project is focused on decoupling CMS and frontend
- All content should be managed via WordPress
- The frontend must remain independent and optimized for performance