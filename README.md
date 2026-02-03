# leorangel-website

Personal website built with **Next.js** and a **headless WordPress CMS**.

This repository contains the **frontend application** only. Content is managed in WordPress and consumed via GraphQL and REST APIs.

---

## 🧱 Architecture

- **Frontend**: Next.js (App Router)
- **CMS**: WordPress (Headless)
- **Data Layer**: WPGraphQL + REST

CMS (WordPress theme) repository:

- 👉 [https://github.com/leorangel/leorangel-cms](https://github.com/leorangel/leorangel-cms)

Boilerplate reference:

- 👉 [https://github.com/vercel/next.js/tree/canary/examples/cms-wordpress](https://github.com/vercel/next.js/tree/canary/examples/cms-wordpress)

---

## 🎯 Project Goals

- Fully static / hybrid-rendered personal website
- Content managed entirely through CMS
- Strong SEO support (sitemap, robots, metadata)
- Draft & preview support from CMS
- On‑demand cache revalidation

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
├─ providers/        # Global providers (theme, context)
├─ gql/              # Auto‑generated GraphQL types
├─ queries/          # GraphQL queries (read operations)
├─ mutations/        # GraphQL mutations
├─ utils/            # Shared utilities
├─ public/           # Static assets
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

## 🔌 WordPress Requirements

The WordPress CMS must have the following plugins installed:

### Required

- **WPGraphQL**
- **WPGraphQL JWT Authentication**
- **Redirection**

### Recommended

- **Yoast SEO**
- **WPGraphQL SEO**

### Optional

- **Advanced Custom Fields**
- **WPGraphQL for ACF**

---

## ⚙️ Environment Variables

Create a `.env` file in the project root:

```env
NEXT_PUBLIC_BASE_URL=http://localhost:3000
NEXT_PUBLIC_WORDPRESS_API_URL=http://wp-domain.com
NEXT_PUBLIC_WORDPRESS_API_HOSTNAME=wp-domain.com
HEADLESS_SECRET=INSERT_RANDOM_SECRET_KEY
WP_USER=username
WP_APP_PASS=application_password
```

### Variable descriptions

| Variable                             | Description                                                                                                                             | Example                 |
| ------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------- | ----------------------- |
| `NEXT_PUBLIC_BASE_URL`               | Base URL of the frontend. Used for sitemap, robots, redirects and metadata generation.                                                  | `http://localhost:3000` |
| `NEXT_PUBLIC_WORDPRESS_API_URL`      | Base URL of the WordPress installation. Used for all data fetching.                                                                     | `http://my-site.local`  |
| `NEXT_PUBLIC_WORDPRESS_API_HOSTNAME` | Hostname only (no protocol) of the WordPress site. Used in `next.config.js` image remote patterns.                                      | `my-site.local`         |
| `HEADLESS_SECRET`                    | Shared secret between WordPress and Next.js. Used for preview authentication and revalidation. Must match the value in `wp-config.php`. | `random-secret-key`     |
| `WP_USER`                            | WordPress user dedicated to headless operations (preview, redirects).                                                                   | `headless_user`         |
| `WP_APP_PASS`                        | Application password generated for `WP_USER`. Required for authenticated GraphQL requests.                                              | `xxxx xxxx xxxx xxxx`   |

> `WP_USER` and `WP_APP_PASS` are critical for preview mode and redirect handling.

---

---

## 🚀 Local Development

Install dependencies using **npm** or **yarn**:

```bash
npm install
# or
yarn install
```

Run the development server:

```bash
npm run dev
# or
yarn dev
```

The site will be available at:

```
http://localhost:3000
```

GraphQL types are automatically generated based on the WordPress schema.

> Before running the project, make sure to create the `.env` file. The `yarn dev` / `npm run dev` script is configured to run GraphQL Codegen, which means the WordPress CMS must be running locally and properly configured. If you want to run the site without the CMS, you can temporarily remove Codegen from the dev script.

---

---

## 🔄 Draft & Preview Mode

This project supports WordPress **preview and draft preview** out of the box.

When preview mode is enabled in `api/preview/route.ts`:

- The frontend authenticates with WordPress using `WP_USER` and `WP_APP_PASS`
- GraphQL requests are executed as an authenticated user
- Draft and unpublished content become available

If a post is in **draft** status, it does not have a public slug. In this case:

- The request is redirected to a temporary route:
  `/preview/{id}`
- The post ID is used to fetch content directly from WordPress

This allows editors to preview content exactly as it will appear on the live site.

---

## ♻️ Cache Revalidation

All GraphQL requests use a shared cache tag:

```
wordpress
```

Whenever content is updated in WordPress, the CMS sends a request to:

```
PUT /api/revalidate
```

This invalidates the `wordpress` cache tag, ensuring that:

- Content stays up to date
- Cache is only revalidated when actual changes occur
- Unrelated pages remain cached

---

## 🔍 SEO

SEO is managed in WordPress using **Yoast SEO**.

- All routes fetch the Yoast SEO object via GraphQL
- SEO data is parsed into Next.js `generateMetadata()`
- Metadata is rendered dynamically per route

This approach keeps SEO editable by content editors while remaining fully static-friendly.

---

## 🧭 Template Handling

The project uses an **optional catch-all route** to handle all WordPress-driven pages.

At render time:

- The route queries GraphQL to determine the content type
- The corresponding template is selected
- Each template defines its own GraphQL query

This enables flexible content types without hardcoding routes.

---

## 🔀 Redirects

The WordPress **Redirection** plugin is supported.

- Redirects are managed inside the WordPress admin
- The frontend consumes redirect rules
- `WP_USER` and `WP_APP_PASS` are required for authenticated redirect handling

This allows editors to control redirects without touching the frontend code.

---

## 📌 Notes

- This project does not rely on WordPress themes for rendering
- All routing and layouts are handled by Next.js
- WordPress is used strictly as a content API
