# Alzaf Frontend

A modern, responsive e-commerce frontend application built with Next.js 16 and React 19.

## 🚀 Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org/) (App Router)
- **Library:** [React 19](https://react.dev/)
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Carousel:** [Embla Carousel](https://www.embla-carousel.com/)

## ✨ Features

- **Home Page:**
  - Hero Banner with Autoplay Carousel
  - Recent Products Listing
- **Product Listing:**
  - Grid View
  - Server-side Pagination
- **Product Details:**
  - Detailed Product Information
  - Image Gallery
  - Add to Cart Functionality (UI)
- **Responsive Design:** Optimized for mobile, tablet, and desktop.

## 🛠️ Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm, pnpm, or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone <https://github.com/thisismasud/alzaf_frontend.git>
   cd alzaf_frontend
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   pnpm install
   ```

3. Run the development server:

   ```bash
   npm run dev
   # or
   pnpm dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📂 Project Structure

```bash
alzaf_frontend/
├── app/                # Next.js App Router pages and layouts
│   ├── products/       # Product related pages
│   │   ├── [id]/       # Product details pages
│   │   │   ├── page.tsx # Product details page
│   │       └── not-found.tsx # Product not found page
│   │   
│   └── page.tsx        # Home page
├── components/         # Reusable React components
│   ├── home/           # Home page specific components
│   ├── products/       # Product related components
│   ├── layout/         # Layout components
│   ├── productDetails/ # Product details components
│   ├── common/         # Common components
│   └── ui/             # Shared UI components
├── lib/                # Utility functions and data fetchers
│   ├── config/         # Site configuration
│   └── data/           #  data and API fetchers
└── public/             # Static assets
```

## 📜 Scripts

- `npm run dev`: Starts the development server.
- `npm run build`: Builds the application for production.
- `npm run start`: Starts the production server.
- `npm run lint`: Runs ESLint to check for code quality.
