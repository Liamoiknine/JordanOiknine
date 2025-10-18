# Images Directory

Place your portfolio images in this directory.

## Recommended Images

1. **Profile Photo** (`profile.jpg` or `profile.png`)
   - Resolution: 600x600px or higher
   - Square aspect ratio
   - Good lighting and professional appearance

2. **Project Images** (e.g., `project1.jpg`, `project2.jpg`)
   - Resolution: 800x600px or higher
   - Aspect ratio: 4:3 or 16:9
   - Clear, high-quality images that represent each project

## Usage

After adding your images here, update the references in:
- `components/sections/Hero.tsx` - for your profile photo
- `data/projects.ts` - for project images

Example:
```typescript
// Before
image: "https://placehold.co/800x600/..."

// After
image: "/images/project1.jpg"
```

