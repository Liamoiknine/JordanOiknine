# Jordan Oiknine - Personal Portfolio

A modern, minimalist portfolio website built with Next.js 14, TypeScript, and Tailwind CSS. Features smooth animations, dark mode, and a distinctive asymmetric design.

## 🚀 Features

- **Modern Stack**: Next.js 14 (App Router), TypeScript, Tailwind CSS
- **Smooth Animations**: Framer Motion for scroll reveals and transitions
- **Dark Mode**: Toggle between light and dark themes
- **Responsive Design**: Mobile-first approach with beautiful layouts on all devices
- **SEO Optimized**: Proper metadata and semantic HTML
- **Fast Performance**: Optimized images and static generation
- **Unique Sections**:
  - Hero/About with asymmetric layout
  - Experience timeline
  - Leadership cards
  - Projects showcase with dynamic pages
  - Contact form

## 📁 Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with theme provider
│   ├── page.tsx             # Homepage with all sections
│   ├── projects/[slug]/     # Dynamic project pages
│   └── globals.css          # Global styles
├── components/
│   ├── Navbar.tsx           # Fixed navigation with smooth scroll
│   ├── Footer.tsx           # Footer with social links
│   ├── ThemeToggle.tsx      # Dark mode toggle
│   ├── sections/            # Homepage sections
│   │   ├── Hero.tsx
│   │   ├── Experience.tsx
│   │   ├── Leadership.tsx
│   │   ├── Projects.tsx
│   │   └── Contact.tsx
│   └── ui/                  # Reusable UI components
│       ├── ProjectCard.tsx
│       └── Button.tsx
├── data/
│   └── projects.ts          # Project data (easy to edit!)
└── lib/
    └── utils.ts             # Helper functions
```

## 🛠 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## ✏️ Customization Guide

### 1. Personal Information

Update your details in:
- `components/sections/Hero.tsx` - Your intro text
- `components/Navbar.tsx` - Your name
- `components/Footer.tsx` - Contact info and social links
- `app/layout.tsx` - Site metadata and SEO

### 2. Add/Edit Projects

Edit the `data/projects.ts` file:

```typescript
{
  slug: "your-project-slug",
  title: "Project Title",
  description: "Brief description for card",
  fullDescription: `<h2>Full HTML content</h2><p>Details...</p>`,
  tags: ["Tag1", "Tag2"],
  image: "https://your-image-url.com/image.jpg",
  date: "2024",
  links: {
    github: "https://github.com/...",
    live: "https://...",
    paper: "https://..."
  }
}
```

### 3. Update Experience & Leadership

Edit:
- `components/sections/Experience.tsx` - Timeline items
- `components/sections/Leadership.tsx` - Leadership cards

### 4. Replace Placeholder Images

1. Add your photos to `/public/images/`
2. Update image URLs in:
   - `components/sections/Hero.tsx` - Your profile photo
   - `data/projects.ts` - Project images

### 5. Colors & Theme

Edit `tailwind.config.ts` to customize:
- Primary colors
- Accent colors
- Fonts
- Animations

## 🚀 Deployment to Vercel

1. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "Initial portfolio setup"
   git push origin main
   ```

2. **Deploy to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js settings
   - Click "Deploy"

Your site will be live in minutes!

### Environment Variables (Optional)

If you add email functionality or analytics:
1. Go to your Vercel project settings
2. Add environment variables
3. Redeploy

## 📝 Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm start        # Start production server
npm run lint     # Run ESLint
```

## 🎨 Design Philosophy

- **Minimalist**: Clean typography and generous white space
- **Distinctive**: Asymmetric grids and unique layouts per section
- **Smooth**: Subtle animations that enhance, not distract
- **Accessible**: Semantic HTML and keyboard navigation
- **Fast**: Optimized images and static generation

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is open source and available under the MIT License.

## 🙋‍♂️ Support

For questions or issues, please open an issue on GitHub or contact [your-email@example.com]

---

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS
