# 📦 Portfolio Website

## 📝 Description

A modern, interactive portfolio website built with Next.js 15, showcasing my career journey, technical skills, projects, blogs, and personal interests. The site features smooth animations, responsive design, and an engaging user experience that highlights my work as a full-stack developer.

## ✨ Features

- **Responsive Design**: Optimized for all devices and screen sizes
- **Interactive UI Components**: Custom animated components with smooth transitions
- **Blog Section**: Personal insights and technical articles
- **Projects Showcase**: Featured work and case studies
- **Bookshelf**: Reading recommendations and reviews
- **Modern Tech Stack**: Built with latest web technologies

## 🛠️ Tech Stack

- **Framework**: Next.js 15.3.1
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Motion (Framer Motion)
- **UI Components**: Custom React components
- **Build Tool**: Next.js CLI

## 🛠️ Requirements

Before running the project locally, ensure you have the following installed:

- **Node.js**: Version 18.0.0 or higher
- **npm**: Latest version (comes with Node.js)
- **Git**: For cloning the repository

## 🚀 Local Setup

Follow these steps to run the project locally:

### 1. Clone the Repository

```bash
git clone https://github.com/fsd-niraj/portfolio.git
cd portfolio
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start Development Server

```bash
npm run dev
```

The application will be available at `http://localhost:3000`

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── app/                 # Next.js app directory
│   │   ├── layout.tsx      # Root layout
│   │   ├── page.tsx        # Home page
│   │   ├── blogs/          # Blog pages
│   │   ├── books/          # Books section
│   │   └── projects/       # Projects section
│   ├── components/         # Reusable components
│   │   ├── ui/            # UI components
│   │   └── home/          # Home page components
│   ├── lib/               # Utility functions
│   ├── constants.ts       # App constants
│   └── data.ts           # Static data
├── public/                # Static assets
└── package.json          # Dependencies and scripts
```

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
