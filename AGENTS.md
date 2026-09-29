# AGENTS.md — PortafolioDiana

## Qué es este proyecto

Portafolio web de **Diana Vargas** — diseñadora gráfica y creativa digital (Colombia). Proyecto **independiente de PagianAudrey** (no comparte código ni repo). HTML + CSS + JS puro, **sin build, sin framework, sin package.json**. Contenido en español.

- **Estado del contenido**: textos, proyectos, servicios y datos de contacto son **ejemplos provisionales** — el usuario los reemplazará por contenido real.
- **Publicación**: solo local por ahora (sin repo git, sin hosting configurado).

## Estructura

- `index.html` — sitio **one-page** con secciones ancla: `#inicio` (hero), `#sobre-mi`, `#proyectos`, `#servicios`, `#contacto` + footer.
- `style.css` — estilos. Paleta fija: ámbar `#E09F3F`, azul pizarra `#335C67`, rojo `#9E2A2B`, amarillo `#FFF3B0` (variables en `:root`). Estilo: **minimalista con toque mágico (Harry Potter, sutil)**: tipografía Playfair Display + Jost, líneas finas, sin degradados. Hero = **banner completo a 100vh** con fondo amarillo aclarado `--amarillo-suave` (#FFFBE3) y **estrellas titilantes** (`hero::before`); header absoluto superpuesto; rayo SVG (`.rayo`) junto al nombre; estrellas `✦/✧` en eyebrows y filetes; sello de lacre (`contact-form::after`) en el formulario. **Cursor personalizado de varita mágica** (SVG inline en `body`; versión con chispa para enlaces/botones; inputs/textarea conservan cursor de texto).
- `script.js` — menú móvil, reveal al hacer scroll (IntersectionObserver), resaltado de sección activa, toast y formulario demo.

## Placeholders a reemplazar (cuando el usuario pase contenido real)

- Bio, stats (5+/60+/40+) y chips de habilidades en `#sobre-mi`.
- 6 proyectos de ejemplo en `#proyectos` (miniaturas con color plano `.g1`–`.g6`, sin imágenes reales).

## Datos reales ya integrados

- Email: `dianitavaror@gmail.com` · WhatsApp: `+57 322 202 0023` (`https://wa.me/573222020023`) · LinkedIn: `https://co.linkedin.com/in/dianavaror/en` (única red social listada; sin Behance ni Instagram).

## Gotchas

- **Formulario de contacto**: sin backend — al enviar muestra un toast y hace `reset()`. Conectar a Formspree/EmailJS/propio cuando se pida.
- Tipografías desde Google Fonts (`Playfair Display` + `Jost`): si no hay internet, cae a fuentes del sistema (no rompe nada).
- `scroll-padding-top` en `style.css` compensa el header sticky al navegar con anclas — mantenerlo sincronizado si cambia la altura del header.

## Verificación

Sin build ni tests. Abrir `index.html` directamente en el navegador. Cosas a revisar: menú móvil (<720px), navegación con anclas, animaciones reveal, envío del formulario (toast) y responsive en ~360px, ~720px y escritorio.
