# 🔄 Configurar Git desde cero para Vercel

## 🧹 **Paso 1: Limpiar configuración Git actual**
```bash
# Eliminar la carpeta .git (esto borra todo el historial local)
rm -rf .git

# O en Windows:
rmdir /s .git
```

## 🆕 **Paso 2: Crear nuevo repositorio en GitHub**
1. Ve a [github.com](https://github.com)
2. Click en "New repository" (botón verde)
3. Nombre: `nomasbullying` (o el que prefieras)
4. **NO** marques "Initialize with README" 
5. Click "Create repository"

## 📤 **Paso 3: Inicializar y subir desde tu proyecto**
```bash
# Inicializar nuevo repositorio Git
git init

# Añadir todos los archivos
git add .

# Primer commit
git commit -m "Initial commit - NoMasBullying for Vercel"

# Configurar rama principal
git branch -M main

# Conectar con tu nuevo repositorio (CAMBIA TU_USUARIO)
git remote add origin https://github.com/TU_USUARIO/nomasbullying.git

# Subir todo
git push -u origin main
```

## 🚀 **Paso 4: Desplegar en Vercel**
```bash
# Instalar Vercel CLI
npm i -g vercel

# Login
vercel login

# Desplegar
vercel --prod
```

## ⚡ **Método súper rápido (alternativo):**
1. Crea un ZIP de tu proyecto (sin carpeta node_modules)
2. Ve a [vercel.com](https://vercel.com)
3. Arrastra el ZIP directamente
4. Añade las variables de entorno en el dashboard
5. ¡Listo!

## 🔧 **Variables de entorno para Vercel:**
```
OPENAI_API_KEY=REEMPLAZAME

XAI_API_KEY=xai-REEMPLAZAME

RESEND_API_KEY=REEMPLAZAME
```

## ⚠️ **Si sigues teniendo problemas:**
```bash
# Ver qué remote tienes configurado
git remote -v

# Eliminar remote si existe
git remote remove origin

# Añadir el nuevo
git remote add origin https://github.com/TU_USUARIO/TU_REPO.git
```

## 🎯 **Orden recomendado:**
1. **Primero:** Limpiar Git local
2. **Segundo:** Crear repo en GitHub 
3. **Tercero:** Subir código
4. **Cuarto:** Conectar con Vercel desde GitHub

¡Así tendrás todo limpio y funcionando perfecto en Vercel!
