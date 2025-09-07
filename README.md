# Flash Repartidores App (Next.js + Vercel/Netlify)

Proyecto listo para desplegar sin errores (fuente Inter en lugar de Geist), con formulario de contacto via Formspree, tests con Deno y CI en GitHub Actions.

## Despliegue rápido
- **Vercel**: importa este repo y Deploy.
- **Netlify**: Build command `npm run build && npm run export`, Publish dir `out`.

## Formspree
Edita `app/page.tsx` y reemplaza el `action="https://formspree.io/f/tu-endpoint-id"` por tu endpoint real de Formspree.

## Tests
Ejecuta `deno test`. GitHub Actions ya corre los tests en cada push/PR.

## Requisitos
- Node 20
- Deno 1.x para correr tests localmente (opcional)
