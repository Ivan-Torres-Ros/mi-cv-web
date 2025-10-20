<div align="center">

# CV Web — Iván Torres Ros

Una web de currículum moderna, rápida y accesible, construida con React, TypeScript y TailwindCSS. Diseño minimalista con fondo oscuro, tipografía destacada y color de acento vibrante (índigo) para comunicar profesionalidad y modernidad.

</div>

## ✨ Características

- UI limpia y responsive (móvil, tablet y escritorio)
- Tema visual: fondo oscuro + acentos índigo vibrantes
- Hero Section minimalista con foto de perfil circular
- Navegación suave con enlaces a secciones (Experience, Skills, Education, Projects, Contact)
- Enlaces sociales: GitHub, LinkedIn, Email, Instagram
- Secciones: Summary, Experience, Education, Skills, Projects, Footer
- Aparición on-scroll (fade/slide) y micro‑interacciones al hover
- Fondo con partículas animadas y efectos visuales sutiles
- Código en TypeScript, estilos con TailwindCSS 4

## 🧱 Stack

- React 19 + Vite 7
- TypeScript 5
- TailwindCSS 4
- React Icons

## 🚀 Empezar

```bash
# 1) Instalar dependencias
npm install

# 2) Servidor de desarrollo
npm run dev

# 3) Build de producción
npm run build

# 4) Previsualizar build
npm run preview
```

Visita `http://localhost:5173/` para ver la web en desarrollo.

## 📁 Estructura principal

```
mi-cv-web/
├─ src/
│  ├─ components/
│  │  ├─ Hero.tsx          # Hero Section minimalista (foto, nombre, enlaces)
│  │  ├─ Nav.tsx           # Navbar sticky
│  │  ├─ Experience.tsx    # Experiencia
│  │  ├─ Education.tsx     # Educación
│  │  ├─ Skills.tsx        # Skills con barras animadas
│  │  ├─ Projects.tsx      # Proyectos con enlaces
│  │  ├─ Footer.tsx        # Contacto adicional
│  │  └─ ParticleBackground.tsx # Fondo con partículas animadas
│  ├─ hooks/useInView.ts   # Hook de aparición on‑scroll
│  ├─ App.tsx              # Layout y secciones
│  ├─ index.css            # Import Tailwind y animaciones clave
│  └─ main.tsx             # Bootstrap de React
├─ index.html              # Gradiente/base visual
└─ tailwind.config.js      # Paleta y tipografías
```

## 🎨 Personalización rápida

- Colores: `tailwind.config.js` (paletas `brandNavy`, `brandOrange`, `brandCyan`)
- Hero Section: `Hero.tsx` (foto, nombre, descripción, enlaces sociales)
- Tipografías: `index.html` (Google Fonts: Outfit + Inter)
- Forzar/alternar modo oscuro: `Nav.tsx` (clase `dark` en `<html>`) 
- Barras de Skills: `Skills.tsx` (`level` y color)
- Fondo de partículas: `ParticleBackground.tsx` (efectos visuales)

## 🧩 Animaciones y efectos

- `useInView` activa fade/slide en secciones al entrar en viewport.
- Hover de tarjetas con `scale` + `shadow` + brillo suave.
- Partículas animadas en el fondo con `ParticleBackground.tsx`.
- Transiciones suaves en enlaces sociales y navegación.

## 📦 Deploy

Puedes desplegarlo en cualquier hosting estático (Netlify, Vercel, GitHub Pages). Para Vercel/Netlify simplemente conecta el repositorio y configura el comando de build `npm run build` y la carpeta `dist` como salida.

## 🔧 Scripts útiles

- `npm run dev` – entorno de desarrollo
- `npm run build` – compilación de producción
- `npm run preview` – servidor para revisar la build
- `npm run lint` – linting del proyecto

## 📜 Licencia

Este proyecto es de uso personal. Si te sirve de inspiración, referencia la autoría.

---

Made with ❤️ using React, TypeScript y TailwindCSS.
