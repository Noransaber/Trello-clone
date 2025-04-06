# 🧩 Trello Clone – Project Management Web App

A fully functional Trello-style project management application built with modern full-stack technologies. This app allows users to manage boards, lists, and cards with real-time drag-and-drop functionality. It includes authentication, authorization, global state management, and Stripe-powered payments.

## 🚀 Features

- ✅ User authentication and session management (Clerk)
- 🏗️ Create, update, and delete project boards
- 📋 Add lists and cards within boards
- 🔄 Drag & drop cards between lists
- 👥 Invite collaborators to boards
- 💳 Subscription-based access (Stripe integration)
- 🌐 Responsive design with accessible UI (ShadCN UI)
- 🧠 Global state management (Zustand)
- 📬 Stripe Webhooks for subscription status sync

---

## 🛠️ Tech Stack

| Tool / Library              | Purpose                                                                                        |
| --------------------------- | ---------------------------------------------------------------------------------------------- |
| **Next.js 14 (App Router)** | Framework for full-stack React apps with file-based routing and server-side rendering.         |
| **React**                   | UI library for building interactive component-based interfaces.                                |
| **Tailwind CSS**            | Utility-first CSS framework for fast UI styling.                                               |
| **ShadCN UI**               | Prebuilt, accessible component library styled with Tailwind.                                   |
| **Zustand**                 | Lightweight state management library for handling global state like modals or drag/drop state. |
| **Clerk**                   | Authentication and user management (OAuth, sessions, multi-tenancy).                           |
| **Prisma ORM**              | Type-safe ORM for interacting with the MySQL database.                                         |
| **MySQL**                   | Relational database for persisting application data.                                           |
| **Stripe**                  | Handles payments, subscriptions, and billing via webhooks.                                     |

---

## 📦 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/trello-clone.git
cd trello-clone

2. Install Dependencies
npm install


3. Setup Environment Variables
Create a .env file in the root directory and add the following keys:

- DATABASE_URL="mysql://USER:PASSWORD@HOST:PORT/DATABASE_NAME"
- NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
- CLERK_SECRET_KEY=your_clerk_secret_key
- STRIPE_SECRET_KEY=your_stripe_secret_key
- STRIPE_WEBHOOK_SECRET=your_stripe_webhook_secret
- NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
- NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
- NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up

Replace the placeholder values with your actual credentials.

🗄️ Database Setup with Prisma (MySQL)
1. Generate Prisma Client
npx prisma generate


2. Run Migrations
npx prisma migrate dev --name init


You can inspect your schema at prisma/schema.prisma.

🔐 Authentication & Authorization (Clerk)
- Authentication: Implemented via Clerk with support for email/password, Google OAuth, and session management.

Authorization: Only authorized users can access their boards. Role-based logic can be extended for admins or collaborators.

💳 Payments & Subscriptions (Stripe)
- Stripe is used to manage subscriptions and billing.
- Webhooks notify the app of subscription status changes (active, canceled, etc.).
- Upon successful subscription, premium features (like more boards or collaboration) are unlocked.
- Stripe Webhook Setup
- stripe listen --forward-to localhost:3000/api/webhook
- Update STRIPE_WEBHOOK_SECRET with the secret provided by the CLI.

🧠 Global State Management (Zustand)
- Zustand is used for:
- Managing UI modals (e.g., create board/card)
- Controlling drag-and-drop state
- Handling transient UI state across components
- Stores are located in /store and follow atomic state design for easy testing and reusability.

🧱 UI Components with ShadCN UI
- UI built with ShadCN UI components for consistency and accessibility.

- Tailwind CSS ensures rapid styling with utility classes.


🖼️ Screenshots
Add screenshots here:
Home page, Board view, Card drag-and-drop, Payment modal, Auth flow


🧠 Author
Noran Saber
Frontend Developer | YouTuber | Open Source Contributor
📫 LinkedIn | GitHub | YouTube
```
