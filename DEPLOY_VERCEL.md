# 🚀 Cómo desplegar en Vercel (2 minutos)

## Opción 1: Desde GitHub (RECOMENDADO)

### 1. Sube tu código a GitHub
```bash
git init
git add .
git commit -m "Initial commit - NoMasBullying app"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/nomasbullying.git
git push -u origin main
```

### 2. Conecta con Vercel
1. Ve a [vercel.com](https://vercel.com)
2. Haz login con GitHub
3. Click en "New Project"
4. Selecciona tu repositorio `nomasbullying`
5. Click "Deploy"

### 3. Añade las variables de entorno
En el dashboard de Vercel:
1. Ve a tu proyecto → Settings → Environment Variables
2. Añade estas 3 variables:

```
OPENAI_API_KEY = REEMPLAZAME

XAI_API_KEY = REEMPLAZAME
C
RESEND_API_KEY = REEMPLAZAME
```

4. Click "Save"
5. Ve a Deployments → Click "Redeploy"

---

## Opción 2: CLI de Vercel (MÁS RÁPIDO)

### 1. Instala Vercel CLI
```bash
npm i -g vercel
```

### 2. Login y despliega
```bash
vercel login
vercel --prod
```

### 3. Añade variables de entorno
```bash
vercel env add OPENAI_API_KEY
vercel env add XAI_API_KEY  
vercel env add RESEND_API_KEY
```

### 4. Redespliega
```bash
vercel --prod
```

---

## ✅ ¿Qué va a pasar?

- **Chat Anti Bullying** funcionará perfectamente
- **Simulaciones de roleplay** funcionarán sin errores
- **Formulario de contacto** enviará emails correctamente
- **Carga súper rápida** (Edge Functions de Vercel)

## 🎯 URL de ejemplo
Tu app estará en algo como: `https://nomasbullying-tu-usuario.vercel.app`

---

**🚀 ¡En 2 minutos tendrás todo funcionando!**