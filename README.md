# Resume Showcase

A modern, interactive personal resume website built with **React**, **TypeScript**, **Vite**, and **TailwindCSS**.  
This project provides a fast, responsive, and elegant way to present your resume, projects, and achievements online.

## Features

- **Interactive UI:** Smooth animations, hover effects, and transitions for an engaging experience.  
- **Responsive Design:** Fully optimized for desktop, tablet, and mobile devices.  
- **Dynamic Sections:** Modular components for Hero, Projects, Skills, Achievements, and About sections.  
- **Lightweight Performance:** Powered by Vite for lightning-fast builds and optimized delivery.  
- **Customizable Styling:** Easily update colors, fonts, and layout using TailwindCSS and component-based design.  
- **Deploy-Ready:** Works seamlessly with GitHub Pages, Vercel, or Netlify.

## Tech Stack

- **Framework:** React (with TypeScript)
- **Build Tool:** Vite
- **Styling:** TailwindCSS
- **UI Components:** ShadCN/UI and custom-built React components
- **Package Manager:** npm or bun

## Getting Started

### Prerequisites

Make sure you have the following installed:
- [Node.js](https://nodejs.org/) (v18 or higher)
- npm or bun

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/resume-showcase.git

# Navigate into the project folder
cd resume-showcase

# Install dependencies
npm install
# or
bun install
```

### Development

To start the local development server:

```bash
npm run dev
# or
bun dev
```

Open your browser and visit [http://localhost:5173](http://localhost:5173).

### Build for Production

```bash
npm run build
# or
bun run build
```

The production build will be located in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## Customization

You can customize the content and visuals easily:

- **Profile Details:** Update the data and text content in components under `src/components`.  
- **Theme Colors & Fonts:** Modify `tailwind.config.ts` for styling preferences.  
- **Resume PDF:** Replace `public/resume.pdf` with your own file.  
- **Assets:** Update images and icons inside the `public` folder.

## Deployment

Deploy easily on:

- [Vercel](https://vercel.com/)
- [Netlify](https://www.netlify.com/)
- [GitHub Pages](https://pages.github.com/)

Run a production build and follow your hosting provider’s instructions.

## License

This project is licensed under the MIT License.  
You are free to modify, distribute, and use this project for personal or commercial purposes.
