# Abril Nails — Pro

Rediseño premium para **Abril Nails**, estudio de uñas en Beccar, San Isidro. HTML/CSS/JS estático en GitHub Pages.

**En vivo:** https://juancjose.github.io/abril-nails-pro/

## Dirección de diseño
*Lacquer noir*: fondo ciruela profundo, gradientes perlados tipo esmalte, serif Didone (Bodoni Moda) con sans geométrica (Outfit). Uñas renderizadas 100 % en CSS.

## Destacado
- **Selector de servicios**: elegís uno o varios y el botón arma el mensaje de WhatsApp para pedir turno.
- Brillo que sigue al puntero, entrada escalonada del hero, guía de formas/terminaciones.
- Accesible (checkboxes reales, foco visible, `aria-live`, `prefers-reduced-motion`), JSON-LD `NailSalon`, OG, sitemap.

## Placeholders
- Horarios (marcados en el sitio). La guía de estilos usa ilustraciones CSS hasta tener fotos reales.

## Performance
- Fuentes self-hosted (woff2, subset latin) con `preload`: sin dependencias de terceros en el render.
- Imágenes WebP con `srcset`/`sizes`, `width`/`height` explícitos (CLS ≈ 0) y `fetchpriority` en la imagen principal.
