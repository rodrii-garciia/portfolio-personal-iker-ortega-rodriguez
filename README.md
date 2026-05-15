# Portfolio — Administración y Finanzas

## Estructura del proyecto

```
/portfolio
│
├── index.html          ← Archivo principal (abrir en navegador)
├── css/
│   └── style.css       ← Todos los estilos
├── js/
│   └── script.js       ← JavaScript (navbar, animaciones, formulario)
├── assets/             ← COLOCAR AQUÍ TUS IMÁGENES
│   ├── hero-bg.jpg     ← Fondo de la portada (recomendado: ciudad/finanzas, 1920x1080)
│   ├── profile.jpg     ← Tu foto de perfil (cuadrada o rectangular, min 400x400)
│   ├── project1.jpg    ← Imagen del proyecto 1 (16:9 recomendado)
│   ├── project2.jpg    ← Imagen del proyecto 2
│   └── project3.jpg    ← Imagen del proyecto 3
└── README.md
```

## Cómo personalizar

### 1. Datos personales
Abre `index.html` y busca:
- **Tu nombre**: busca "Ana García Martínez" y reemplaza por el tuyo en todos los lugares
- **Email**: busca "ana.garcia@email.com"
- **LinkedIn**: busca `href="https://linkedin.com"` y pon tu URL real
- **Subtítulo**: busca "Estudiante de Administración y Finanzas"

### 2. Imágenes
Coloca tus imágenes en la carpeta `/assets/` con los nombres exactos indicados arriba.
- Si no tienes imagen de portada, el fondo geométrico oscuro ya está incluido por defecto.
- Si no tienes foto de perfil, el placeholder con letra inicial se mostrará automáticamente.

Para activar la imagen de fondo del hero, en `css/style.css` busca:
```css
/* Cuando exista la imagen real: */
/* .hero { background-image: url('../assets/hero-bg.jpg'); ... } */
```
Y descomenta esa línea quitando los `/* */`.

### 3. Proyectos y experiencia
En `index.html` edita los textos de cada card de proyecto y los items de la timeline con tu información real.

### 4. Colores
Las variables de color están al inicio de `css/style.css`:
```css
:root {
  --navy:   #0d1b2a;   ← Azul marino principal
  --gold:   #b8966a;   ← Dorado (acentos)
  --ivory:  #f7f5f0;   ← Fondo claro
}
```

## Características incluidas
- ✅ Diseño responsive (móvil, tablet, desktop)
- ✅ Navbar sticky con cambio de fondo al hacer scroll
- ✅ Menú hamburguesa en móvil
- ✅ Animaciones de aparición al hacer scroll
- ✅ Timeline alternada izquierda/derecha
- ✅ Hover effects elegantes en cards y proyectos
- ✅ Barras de idiomas animadas
- ✅ Formulario de contacto con validación visual
- ✅ Scroll suave entre secciones
- ✅ Sin dependencias externas (excepto Google Fonts)

## Notas técnicas
- El formulario NO envía datos realmente (requiere backend o servicio como Formspree)
- Para activar envío real, integra con: Formspree, EmailJS, o Netlify Forms
- Compatible con todos los navegadores modernos
