# � Restaurante Bella Vista - Website

Una aplicación web moderna para restaurante desarrollada con React + Vite, featuring arquitectura modular y diseño responsivo.

## ✨ Características

- **� Página Principal**: Hero section, especialidades, sobre nosotros, contacto
- **� Página de Carta**: Menú completo con categorías interactivas
- **� Responsive Design**: Adaptado para móviles, tablets y desktop
- **� Diseño Modular**: Componentes reutilizables con CSS Modules
- **⚡ Vite**: Build tool rápido y moderno
- **� SEO Friendly**: Estructura semántica y optimizada

## � Tecnologías

- **React 18** - Library de JavaScript
- **Vite** - Build tool y dev server
- **CSS Modules** - Estilos modulares
- **Lucide React** - Iconos modernos
- **React Router DOM** - Navegación (opcional)

## � Instalación

```bash
# Clonar repositorio
git clone <url-repositorio>
cd restaurant-website

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Build para producción
npm run build

# Preview del build
npm run preview
```

## � Estructura del Proyecto

```
src/
├── components/          # Componentes reutilizables
│   ├── common/         # Header, Footer, Button
│   ├── sections/       # Hero, About, Menu, Contact
│   └── ui/            # Card, Modal, Form
├── pages/             # Páginas principales
├── hooks/             # Custom hooks
├── data/              # Datos del restaurante y menú
├── styles/            # Estilos globales
└── utils/             # Utilidades y helpers
```

## � Funcionalidades

### Página Principal
- Hero section con call-to-actions
- Preview de especialidades del menú
- Sección "Sobre Nosotros" con estadísticas
- Formulario de contacto y reservas

### Página de Carta
- Menú completo organizado por categorías
- Navegación interactiva entre secciones
- Diseño limpio y fácil de leer
- Información adicional sobre ingredientes

## �️ Desarrollo

### Comandos disponibles

```bash
npm run dev      # Servidor de desarrollo
npm run build    # Build para producción
npm run preview  # Preview del build
npm run lint     # Linter
```

### Agregar nuevas funcionalidades

1. **Nuevos componentes**: Crear en `src/components/`
2. **Nuevas páginas**: Agregar en `src/pages/`
3. **Estilos**: Usar CSS Modules (`ComponentName.module.css`)
4. **Datos**: Modificar archivos en `src/data/`

## � Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## � Colores del Brand

```css
--primary-color: #d4af37;    /* Dorado */
--secondary-color: #2c1810;  /* Marrón oscuro */
--accent-color: #8b4513;     /* Marrón medio */
--text-light: #f5f5f5;       /* Texto claro */
--text-dark: #2c1810;        /* Texto oscuro */
```

## � Licencia

© 2024 Bella Vista Restaurant. Todos los derechos reservados.
