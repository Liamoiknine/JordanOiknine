# Quick Start Guide

## 🚀 Get Up and Running in 5 Minutes

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Start Development Server
```bash
npm run dev
```

Visit: http://localhost:3000

### Step 3: Customize Your Content

#### Update Personal Info
1. Open `components/sections/Hero.tsx`
   - Change the name from "Jordan" to yours
   - Update the intro paragraph
   
2. Open `components/Navbar.tsx`
   - Change "Jordan Oiknine" to your name

3. Open `components/Footer.tsx`
   - Update email, LinkedIn, GitHub links
   - Change the tagline

4. Open `app/layout.tsx`
   - Update the site title and description

#### Add Your Projects
1. Open `data/projects.ts`
2. Edit or replace the sample projects:
   ```typescript
   {
     slug: "my-project",
     title: "My Project Title",
     description: "Brief description...",
     fullDescription: `<h2>Details</h2><p>Full description...</p>`,
     tags: ["Tag1", "Tag2"],
     image: "/images/my-project.jpg",
     date: "2024",
     links: { github: "...", live: "..." }
   }
   ```

#### Update Experience & Leadership
1. Open `components/sections/Experience.tsx`
   - Update the `experiences` array with your experience

2. Open `components/sections/Leadership.tsx`
   - Update the `leadershipRoles` array with your roles

#### Add Your Photos
1. Add images to `public/images/`
2. Update references in:
   - `components/sections/Hero.tsx` (profile photo)
   - `data/projects.ts` (project images)

### Step 4: Test Build
```bash
npm run build
```

If successful, you're ready to deploy!

### Step 5: Deploy to Vercel
1. Push to GitHub:
   ```bash
   git add .
   git commit -m "Personalized portfolio"
   git push
   ```

2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Click Deploy

Done! Your portfolio is live. 🎉

## 🎨 Customization Tips

### Change Colors
Edit `tailwind.config.ts`:
```typescript
colors: {
  primary: {
    // Your color palette
    500: "#your-color",
  }
}
```

### Add More Sections
1. Create a new component in `components/sections/`
2. Import it in `app/page.tsx`
3. Add a link in `components/Navbar.tsx`

### Modify Animations
Framer Motion settings are in each section component.
Adjust `initial`, `animate`, and `transition` props.

## 📚 Need More Help?

Check the full `README.md` for detailed documentation.

## 🐛 Common Issues

**Issue**: Build fails with "module not found"
**Solution**: Run `npm install` again

**Issue**: Images not showing
**Solution**: Make sure images are in `public/images/` and paths start with `/images/`

**Issue**: Dark mode not working
**Solution**: Clear browser cache and reload

---

Happy coding! 🚀

