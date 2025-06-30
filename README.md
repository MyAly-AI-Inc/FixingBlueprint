# 3D Blueprint

A comprehensive educational platform for learning 3D printing, from beginner to advanced techniques.

## Overview

3D Blueprint is a free educational resource that helps users master 3D printing through structured learning paths, interactive tools, and community features.

## Features

- 📚 **Structured Learning Paths** - From fundamentals to advanced techniques
- 🎨 **Dreamland Gallery** - Interactive AI art showcase
- 🏆 **Live Challenges** - Real-time 3D printing competitions
- 🤝 **Community Hub** - Connect with other makers
- 🛠️ **Business Resources** - Turn skills into profit

## Pages

- `/` - Homepage with hero section and feature overview
- `/blueprint` - Main learning platform
- `/dreamland` - Interactive AI art gallery
- `/community` - Community features and forums
- `/aly` - Aly Challenge page
- `/mini-blueprint` - Condensed learning resources

## Tech Stack

- **Framework**: Next.js 15.2.4
- **UI**: React 19 with TypeScript
- **Styling**: Tailwind CSS
- **Components**: Shadcn/ui
- **Animations**: Framer Motion
- **3D**: Three.js, React Three Fiber
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or pnpm

### Installation

```bash
# Clone the repository
git clone [your-repo-url]

# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Project Structure

```
├── app/
│   ├── page.tsx              # Homepage
│   ├── blueprint/
│   ├── dreamland/
│   ├── community/
│   └── layout.tsx
├── components/
│   ├── sections/             # Reusable section components
│   └── ui/                   # UI components (shadcn)
├── public/
│   ├── manifest.json         # PWA manifest
│   └── [images]
└── lib/
    └── utils.ts              # Utility functions
```

## Environment Variables

Create a `.env.local` file:

```env
# Add any required environment variables here
# NEXT_PUBLIC_API_URL=
```

## Deployment

This project is optimized for deployment on:
- Vercel (recommended)
- Netlify
- Any platform supporting Next.js

## Contributing

This is a private project. Please do not submit pull requests.

## License

All rights reserved. This is proprietary software.

---

Built with ❤️ by Aly Yu
