# Instrucciones para aplicar y revertir patches de corrección

Este repositorio incluye dos patches para manejar la corrección del error con `index.html` en Next.js.

## 📌 Patches disponibles
- `fix-nextjs.patch` → Corrige el error eliminando `index.html` y creando `pages/_document.js` y `pages/index.js`.
- `undo-fix.patch` → Revierte los cambios y restaura el archivo `index.html` original.

---

## 🚀 Cómo aplicar el fix

1. Copia `fix-nextjs.patch` en la raíz del repositorio.
2. Ejecuta en la terminal:
   ```bash
   git apply fix-nextjs.patch
   ```
3. Haz commit de los cambios:
   ```bash
   git add .
   git commit -m "fix: remove index.html and replace with Next.js pages"
   ```

---

## 🔄 Cómo revertir el fix

1. Copia `undo-fix.patch` en la raíz del repositorio.
2. Ejecuta en la terminal:
   ```bash
   git apply undo-fix.patch
   ```
3. Haz commit de los cambios:
   ```bash
   git add .
   git commit -m "revert: restore index.html and remove Next.js pages"
   ```

---

✅ Con estos pasos puedes alternar entre la versión corregida y la original fácilmente.
