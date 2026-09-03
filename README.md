# LAZO — Landing page GitHub Pages V1.0

Landing estática, responsive y sin backend. Su objetivo es **informar y convertir a WhatsApp**, no almacenar expedientes clínicos.

## 1. Antes de publicar
Edita únicamente `config.js`:

- `whatsappNumber`: número en formato internacional, sólo dígitos. Ejemplo México: `5213312345678`.
- `email`: correo institucional.
- `website`: dominio final.
- `city`: cobertura que quieras mostrar.

## 2. Aviso de privacidad
`aviso-privacidad.html` es deliberadamente un placeholder. Sustituye el contenido por la versión LEG-004 aprobada antes del lanzamiento público.

## 3. Publicar en GitHub Pages
1. Crea un repositorio público, por ejemplo `lazo-web`.
2. Sube el contenido de esta carpeta a la raíz del repositorio.
3. En GitHub: **Settings → Pages**.
4. Selecciona despliegue desde la rama `main` / carpeta raíz, o configura GitHub Actions si lo prefieres.
5. Guarda y espera a que GitHub genere la URL.
6. Si compras un dominio, configúralo posteriormente en Pages.

## 4. Estructura
- `index.html` — home.
- `styles.css` — identidad y responsive.
- `app.js` — WhatsApp, menú y animaciones.
- `config.js` — datos de contacto editables.
- `aviso-privacidad.html` — placeholder legal.
- `assets/` — logos oficiales.

## 5. Regla de seguridad
No agregues formularios que pidan diagnósticos, documentos clínicos, fotografías, identificaciones o datos sensibles hasta definir la infraestructura y proceso de protección correspondiente.

## 6. Mensajes y contenido
La home ya incluye dos rutas diferenciadas:
- Cliente: **Solicitar un servicio**.
- Prestador: **Quiero integrarme al padrón**.

Ambas abren WhatsApp con un mensaje precargado una vez configurado el número.
