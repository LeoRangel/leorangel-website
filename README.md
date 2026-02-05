# leorangel-website

Personal website built with **Next.js** and a **headless CMS**.

This repository contains the **frontend application** only. Content is managed in CMS and consumed via GraphQL and REST APIs.

---

## 🧱 Architecture

- **Frontend**: Next.js (App Router) and TypeScript
- **CMS**: WordPress (Headless)
- **Data Layer**: GraphQL + REST APIs

---

## ✨ Key Features

- **App Router** with dynamic catch‑all routing for WordPress content
- **Dynamic SEO metadata** powered by Yoast SEO
- **Sitemap & robots.txt** generated at runtime
- **Draft / Preview Mode** integrated with WordPress
- **On‑demand cache revalidation** triggered by CMS updates
- **Infinite scroll** for posts using cursor‑based GraphQL pagination
- **Automatic GraphQL type generation** via Codegen
- **Modern UI stack** using Tailwind CSS, shadcn/ui, and Radix UI

---

## 📂 Project Structure

```
├─ app/              # App Router routes and pages
├─ components/       # UI components (Atomic Design inspired)
├─ providers/        # Global providers
├─ graphql/          # GraphQL queries and mutations (by domain)
├─ gql/              # Auto-generated GraphQL artifacts (codegen)
├─ hooks/            # Custom React hooks
├─ lib/              # Shared infrastructure and wrappers
├─ services/         # Data fetching and external integrations (by domain)
├─ types/            # Shared application types
├─ utils/            # Pure utility functions
├─ middleware.ts     # Redirect handling
├─ sitemap.ts        # Sitemap generation
├─ robots.ts         # Robots.txt generation
└─ next.config.js
```

### 🧱 Components Organization

The component structure follows an **Atomic Design–inspired approach**, helping keep the UI organized, scalable, and easy to reason about.

#### Styling & UI

- **Tailwind CSS** is used for all styling and layout
- **shadcn/ui** provides reusable, composable UI primitives
- **Radix UI** is used under the hood for accessible, unstyled components

This combination allows for a fully custom design system while maintaining accessibility and consistency.

#### Component Layers

- **/ui** – Low-level UI components (shadcn/ui)
- **/atoms** – Smallest UI building blocks
- **/molecules** – Composed UI components
- **/organisms** – Larger layout components (Header, Footer, Navigation)
- **/templates** – Page-level templates

---

## 📌 Notes

- This project does not rely on WordPress themes for rendering
- All routing and layouts are handled by Next.js
- WordPress is used strictly as a content API
