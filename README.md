<div align="center">

# CV Web — Iván Torres Ros

Una web de currículum moderna, rápida y accesible, construida con React, TypeScript y TailwindCSS. Diseño visual contundente en azul marino y naranja, animaciones sutiles y navegación suave para comunicar profesionalidad y energía.

</div>

## ✨ Características

- UI limpia y responsive (móvil, tablet y escritorio)
- Tema visual: azul marino + acentos naranja/cian
- Modo oscuro forzado para máximo contraste (opcional con toggle)
- Hero con nombre y CTA de contacto (Email, GitHub, LinkedIn)
- Secciones: Summary, Experience, Education, Skills, Projects, Footer
- Aparición on-scroll (fade/slide) y micro‑interacciones al hover
- Fondo con gradientes y blobs decorativos de baja distracción
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
│  │  ├─ Header.tsx        # Hero (nombre, contacto, chips)
│  │  ├─ Nav.tsx           # Navbar sticky
│  │  ├─ Experience.tsx    # Experiencia
│  │  ├─ Education.tsx     # Educación
│  │  ├─ Skills.tsx        # Skills con barras animadas
│  │  ├─ Projects.tsx      # Proyectos con enlaces
│  │  └─ Footer.tsx        # Contacto adicional
│  ├─ hooks/useInView.ts   # Hook de aparición on‑scroll
│  ├─ App.tsx              # Layout y secciones
│  ├─ index.css            # Import Tailwind y animaciones clave
│  └─ main.tsx             # Bootstrap de React
├─ index.html              # Gradiente/base visual
└─ tailwind.config.js      # Paleta y tipografías
```

## 🎨 Personalización rápida

- Colores: `tailwind.config.js` (paletas `brandNavy`, `brandOrange`, `brandCyan`)
- Tipografías: `index.html` (Google Fonts: Outfit + Inter)
- Forzar/alternar modo oscuro: `Nav.tsx` (clase `dark` en `<html>`) 
- Barras de Skills: `Skills.tsx` (`level` y color)

## 🧩 Animaciones y efectos

- `useInView` activa fade/slide en secciones al entrar en viewport.
- Hover de tarjetas con `scale` + `shadow` + brillo suave.
- Blobs decorativos en `index.html` con animaciones muy lentas.

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
