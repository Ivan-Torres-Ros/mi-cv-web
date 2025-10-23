# Estructura del Proyecto CV Web

## 📁 Organización de Carpetas

```
src/
├── components/
│   ├── layout/          # Componentes de layout
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── Nav.tsx
│   ├── sections/        # Secciones principales del CV
│   │   ├── Hero.tsx
│   │   ├── CoreStrengths.tsx
│   │   ├── TransferableExperience.tsx
│   │   ├── Education.tsx
│   │   ├── Skills.tsx
│   │   ├── Languages.tsx
│   │   └── Projects.tsx
│   ├── ui/             # Componentes reutilizables (futuro)
│   └── background/     # Componentes de fondo/animaciones
│       └── ParticleBackground.tsx
├── hooks/              # Custom hooks
│   └── useInView.ts
├── types/              # Tipos TypeScript
│   └── index.ts
├── utils/              # Funciones utilitarias
│   └── index.ts
├── constants/          # Constantes del proyecto
│   └── index.ts
└── styles/             # Estilos globales
    └── index.css
```

## 🎯 Beneficios de esta Estructura

- **Organización clara**: Cada tipo de componente tiene su lugar
- **Escalabilidad**: Fácil agregar nuevos componentes
- **Mantenibilidad**: Código más fácil de encontrar y modificar
- **Profesional**: Estructura estándar en la industria
- **Git-friendly**: Cambios más fáciles de trackear

## 🚀 Cómo Usar

### Agregar un nuevo componente de sección:
```typescript
// Crear en src/components/sections/MiNuevaSeccion.tsx
// Importar en App.tsx: import MiNuevaSeccion from './components/sections/MiNuevaSeccion'
```

### Agregar un nuevo hook:
```typescript
// Crear en src/hooks/useMiHook.ts
// Exportar desde src/hooks/index.ts
```

### Agregar nuevas constantes:
```typescript
// Agregar en src/constants/index.ts
// Importar donde necesites: import { MI_CONSTANTE } from './constants'
```
