# í½ Restaurante Bella Vista - Website

Una aplicaciÃ³n web moderna para restaurante desarrollada con React + Vite, featuring arquitectura modular y diseÃ±o responsivo.

## âœ¨ CaracterÃ­sticas

- **í¿  PÃ¡gina Principal**: Hero section, especialidades, sobre nosotros, contacto
- **í³– PÃ¡gina de Carta**: MenÃº completo con categorÃ­as interactivas
- **í³± Responsive Design**: Adaptado para mÃ³viles, tablets y desktop
- **í¾¨ DiseÃ±o Modular**: Componentes reutilizables con CSS Modules
- **âš¡ Vite**: Build tool rÃ¡pido y moderno
- **í´ SEO Friendly**: Estructura semÃ¡ntica y optimizada

## íº€ TecnologÃ­as

- **React 18** - Library de JavaScript
- **Vite** - Build tool y dev server
- **CSS Modules** - Estilos modulares
- **Lucide React** - Iconos modernos
- **React Router DOM** - NavegaciÃ³n (opcional)

## í³¦ InstalaciÃ³n

```bash
# Clonar repositorio
git clone <url-repositorio>
cd restaurant-website

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Build para producciÃ³n
npm run build

# Preview del build
npm run preview
```

## í³‚ Estructura del Proyecto

```
src/
â”œâ”€â”€ components/          # Componentes reutilizables
â”‚   â”œâ”€â”€ common/         # Header, Footer, Button
â”‚   â”œâ”€â”€ sections/       # Hero, About, Menu, Contact
â”‚   â””â”€â”€ ui/            # Card, Modal, Form
â”œâ”€â”€ pages/             # PÃ¡ginas principales
â”œâ”€â”€ hooks/             # Custom hooks
â”œâ”€â”€ data/              # Datos del restaurante y menÃº
â”œâ”€â”€ styles/            # Estilos globales
â””â”€â”€ utils/             # Utilidades y helpers
```

## í¾¯ Funcionalidades

### PÃ¡gina Principal
- Hero section con call-to-actions
- Preview de especialidades del menÃº
- SecciÃ³n "Sobre Nosotros" con estadÃ­sticas
- Formulario de contacto y reservas

### PÃ¡gina de Carta
- MenÃº completo organizado por categorÃ­as
- NavegaciÃ³n interactiva entre secciones
- DiseÃ±o limpio y fÃ¡cil de leer
- InformaciÃ³n adicional sobre ingredientes

## í» ï¸ Desarrollo

### Comandos disponibles

```bash
npm run dev      # Servidor de desarrollo
npm run build    # Build para producciÃ³n
npm run preview  # Preview del build
npm run lint     # Linter
```

### Agregar nuevas funcionalidades

1. **Nuevos componentes**: Crear en `src/components/`
2. **Nuevas pÃ¡ginas**: Agregar en `src/pages/`
3. **Estilos**: Usar CSS Modules (`ComponentName.module.css`)
4. **Datos**: Modificar archivos en `src/data/`

## í³± Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## í¾¨ Colores del Brand

```css
--primary-color: #d4af37;    /* Dorado */
--secondary-color: #2c1810;  /* MarrÃ³n oscuro */
--accent-color: #8b4513;     /* MarrÃ³n medio */
--text-light: #f5f5f5;       /* Texto claro */
--text-dark: #2c1810;        /* Texto oscuro */
```

## í³„ Licencia

Â© 2024 Bella Vista Restaurant. Todos los derechos reservados.
