# Iván Torres Ros - Personal CV Website

A modern, interactive personal CV website built with React, TypeScript, and Tailwind CSS. Features smooth animations, particle effects, and a professional dark theme.

## 🚀 Features

### ✨ Modern Design & Animations
- **Framer Motion Integration**: Smooth animations and transitions throughout the site
- **Particle Background**: Interactive particle system using tsparticles
- **Dark Theme**: Professional dark color scheme with gradient transitions
- **Responsive Design**: Optimized for all device sizes
- **Custom Logo**: Personal TR logo in navigation

### 🎨 Visual Effects
- **Staggered Animations**: Content reveals with elegant timing
- **Hover Effects**: Interactive elements with smooth transitions
- **Gradient Transitions**: Seamless flow between Hero and content sections
- **Semi-transparent Backgrounds**: Modern glassmorphism effects
- **Smooth Scrolling**: Enhanced navigation with proper offset

### 📱 Sections
- **Hero**: Personal introduction with animated profile picture
- **Core Strengths**: Technical expertise and specializations
- **Transferable Experience**: Professional work history with soft skills
- **Education**: Academic background with course highlights
- **Technical Skills**: Programming languages, tools, and methodologies
- **Languages**: Language proficiency levels
- **Projects**: Academic and personal projects with GitHub links

### 🛠️ Technical Stack
- **React 18** with TypeScript
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **TSParticles** for particle effects
- **React Icons** for UI elements
- **Vite** for build tooling

## 🎯 Key Features

### Navigation
- **Smooth Scroll Navigation**: Click any link to smoothly scroll to sections
- **Logo Integration**: Custom TR logo replaces name in navigation
- **Offset Navigation**: Proper positioning to show section titles
- **Responsive Menu**: Works perfectly on mobile and desktop

### Animations
- **Entrance Animations**: Content appears with staggered timing
- **Hover Effects**: Interactive feedback on all clickable elements
- **Scroll Animations**: Elements animate as they enter the viewport
- **Performance Optimized**: Animations only trigger once per view

### Visual Design
- **Particle System**: Dynamic background with moving particles
- **Gradient Transitions**: Smooth color transitions between sections
- **Glassmorphism**: Semi-transparent backgrounds with blur effects
- **Consistent Theming**: Unified color palette throughout

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Ivan-Torres-Ros/mi-cv-web.git
   cd mi-cv-web
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

## 📁 Project Structure

```
src/
├── components/
│   ├── Hero.tsx                 # Landing section with profile
│   ├── Nav.tsx                  # Navigation with logo
│   ├── CoreStrengths.tsx        # Technical expertise
│   ├── TransferableExperience.tsx # Work experience
│   ├── Education.tsx            # Academic background
│   ├── Skills.tsx               # Technical skills
│   ├── Languages.tsx            # Language proficiency
│   ├── Projects.tsx             # Project showcase
│   ├── Footer.tsx               # Contact information
│   └── ParticleBackground.tsx    # Animated particles
├── App.tsx                      # Main application
└── index.css                    # Global styles
```

## 🎨 Customization

### Colors
The site uses a consistent color palette defined in Tailwind:
- **Primary**: Indigo-400 for accents
- **Background**: Gray-950 to Slate-900 gradients
- **Text**: White and Gray-300 for readability

### Animations
All animations are configured in individual components using Framer Motion:
- **Duration**: 0.3s - 0.8s for smooth performance
- **Easing**: Natural transitions
- **Triggers**: Viewport-based and hover interactions

### Logo
Replace `public/logo.png` with your custom logo:
- **Size**: Recommended 64x64px minimum
- **Format**: PNG with transparent background
- **Aspect Ratio**: Will auto-scale to fit

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px

## 🚀 Performance

- **Optimized Animations**: Only animate when in viewport
- **Lazy Loading**: Components load as needed
- **Smooth Scrolling**: Hardware-accelerated transitions
- **Particle Optimization**: Limited particle count for performance

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Iván Torres Ros**
- GitHub: [@Ivan-Torres-Ros](https://github.com/Ivan-Torres-Ros)
- LinkedIn: [Iván Torres](https://www.linkedin.com/in/ivantorresingeniero/)
- Email: torresrosivan@gmail.com

---

Built with ❤️ using React, TypeScript, and modern web technologies.