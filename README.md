# Jordan Oiknine - Creative Portfolio

A distinctive, non-traditional portfolio website built with Next.js 14, TypeScript, and Tailwind CSS. Features an unconventional navigation system, editorial layouts, and project-first storytelling.

## 🎨 Design Philosophy

This portfolio breaks from traditional templates with:
- **Portal Landing**: Interactive entry point with 3 exploration paths
- **Non-linear Navigation**: Floating nav system for seamless transitions
- **Magazine Layouts**: Editorial-style content presentation
- **Creative Interactions**: Hover reveals, expandable timelines, slide-in details

## ✨ Features

- **Modern Stack**: Next.js 14 (App Router), TypeScript, Tailwind CSS
- **Creative Navigation**: Portal-based entry with floating navigation
- **Three Main Views**:
  - **Work**: Magazine-style project showcase with featured layout
  - **Story**: Editorial personal narrative with horizontal timeline
  - **Connect**: Minimal contact panel
- **Smooth Animations**: Framer Motion for page transitions and interactions
- **Dark Mode**: Theme toggle with smooth transitions
- **Fully Responsive**: Mobile-first design with adaptive layouts
- **SEO Optimized**: Proper metadata and semantic HTML

## 📁 Project Structure

```
├── app/
│   ├── layout.tsx              # Minimal layout (no navbar/footer)
│   ├── page.tsx                # Portal landing page
│   ├── work/
│   │   ├── page.tsx           # Projects magazine view
│   │   └── [slug]/page.tsx    # Individual project details
│   ├── story/page.tsx          # Personal narrative & timeline
│   └── connect/page.tsx        # Contact panel
├── components/
│   ├── Portal.tsx              # Interactive landing with 3 cards
│   ├── FloatingNav.tsx         # Minimal floating navigation
│   ├── ThemeToggle.tsx         # Dark mode toggle
│   ├── views/
│   │   ├── WorkView.tsx       # Projects view
│   │   ├── StoryView.tsx      # Story view
│   │   └── ConnectView.tsx    # Connect view
│   ├── project/
│   │   ├── FeaturedProject.tsx
│   │   ├── ProjectGrid.tsx
│   │   └── ProjectDetail.tsx
│   ├── timeline/
│   │   ├── HorizontalTimeline.tsx
│   │   └── TimelineItem.tsx
│   └── ui/
│       └── Button.tsx
├── data/
│   ├── projects.ts             # Project data
│   └── experiences.ts          # Timeline experiences
└── lib/
    └── utils.ts                # Utilities
```

## 🚀 Getting Started

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

**Portal Landing** (`components/Portal.tsx`):
- Update name and subtitle

**Story View** (`components/views/StoryView.tsx`):
- Edit personal philosophy text
- Update "Why Biotech?" and other narrative sections

**Connect View** (`components/views/ConnectView.tsx`):
- Update email, LinkedIn, GitHub links

**Layout** (`app/layout.tsx`):
- Update site metadata and SEO

### 2. Add/Edit Projects

Edit `data/projects.ts`:

```typescript
{
  slug: "your-project-slug",
  title: "Project Title",
  description: "Brief description for cards",
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

### 3. Update Experiences & Timeline

Edit `data/experiences.ts`:

```typescript
{
  id: "unique-id",
  title: "Experience Title",
  organization: "Organization",
  period: "2023 - Present",
  description: "Description...",
  category: "sports" | "leadership" | "service" | "business",
  impact: "Impact statement"
}
```

### 4. Replace Photos

1. Add images to `public/images/`
2. Update image URLs in:
   - `components/views/StoryView.tsx` - Profile photo
   - `data/projects.ts` - Project images

### 5. Colors & Theme

Edit `tailwind.config.ts` to customize:
- Primary/accent colors
- Fonts
- Animations
- Spacing

## 🎯 Key Design Elements

### Portal Navigation
The landing page presents three interactive cards that users can explore:
- **Work**: Showcases biotech projects
- **Story**: Personal journey and philosophy
- **Connect**: Contact information

### Magazine Layout (Work View)
- Featured project takes 60% of viewport
- Asymmetric grid for secondary projects
- Hover effects and smooth transitions
- Click any project for full detail overlay

### Editorial Story View
- Side-by-side photo and narrative
- Horizontal scrolling timeline
- Clickable experience cards that expand
- Personal philosophy replaces generic bio

### Minimal Connect
- Centered, clean layout
- Direct contact links
- No form clutter
- Genuine student voice

## 🚀 Deployment to Vercel

1. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "Creative portfolio redesign"
   git push origin main
   ```

2. **Deploy to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Click "Deploy"

Your site will be live in minutes!

## 📝 Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm start        # Start production server
npm run lint     # Run ESLint
```

## 🎨 Design Highlights

### What Makes This Different

**Not a Template:**
- No standard navbar or hero section
- Non-linear navigation system
- Editorial layouts instead of card grids
- Personal narrative over resume format

**Creative Elements:**
- Interactive portal landing
- Floating navigation system
- Magazine-style featured projects
- Horizontal scrolling timeline
- Expandable experience cards
- Slide-in project details

**Smooth Interactions:**
- Page transitions with Framer Motion
- Hover reveals and effects
- Scale and fade animations
- Modal overlays for details

## 📱 Responsive Design

- **Mobile**: Stacked cards, vertical timeline, simplified layouts
- **Tablet**: 2-column grids, adjusted spacing
- **Desktop**: Full magazine layouts, horizontal timeline

## 🛠 Technologies

- **Framework**: Next.js 14.2 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 3.4
- **Animations**: Framer Motion 11.11
- **Icons**: Lucide React
- **Theme**: next-themes
- **Fonts**: Inter (body), Playfair Display (headings)

## 📄 Routes

- `/` - Portal landing
- `/work` - Projects showcase
- `/work/[slug]` - Individual project detail
- `/story` - Personal narrative & timeline
- `/connect` - Contact panel

## 🎯 Built For College Applications

This portfolio is designed to stand out in college applications by:
- Showing creativity and technical skill
- Demonstrating design thinking
- Presenting work in a compelling way
- Highlighting personal story authentically
- Being memorable and distinctive

## 📚 Documentation Files

- `README.md` - This file
- `QUICK_START.md` - Quick customization guide
- `PROJECT_SUMMARY.md` - Original build documentation

---

**Built with creativity** using Next.js, TypeScript, and Tailwind CSS

**Breaking templates, building experiences** 🚀
