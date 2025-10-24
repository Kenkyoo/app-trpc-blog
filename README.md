# 📝 App TRPC Notes

Una aplicación de notas construida con **Next.js**, **Prisma**, **tRPC** y **Clerk** para la autenticación.

🔗 **Deploy:** [https://trpc-next-prisma.onrender.com/](https://trpc-next-prisma.onrender.com/)
💻 **Repositorio:** [https://github.com/Kenkyoo/app-trpc-blog](https://github.com/Kenkyoo/app-trpc-blog)

---

## 🚀 Tecnologías principales

* **Next.js 15** – Framework React para el frontend y backend.
* **tRPC** – API typesafe sin necesidad de REST o GraphQL.
* **Prisma** – ORM para manejar la base de datos (PostgreSQL).
* **Clerk** – Autenticación y manejo de usuarios.
* **TailwindCSS** – Estilos rápidos y modernos.

---

## ⚙️ Características

* Registro e inicio de sesión con Clerk.
* Crear, editar y eliminar notas.
* Guardado de notas en la base de datos usando Prisma.
* Endpoints seguros y tipados con tRPC.
* UI minimalista con componentes de **Radix UI** y **Tailwind**.

---

## 🛠️ Instalación local

```bash
# Clonar el repositorio
git clone https://github.com/Kenkyoo/app-trpc-blog.git
cd app-trpc-blog

# Instalar dependencias
pnpm install

# Configurar variables de entorno
cp .env.example .env

# Ejecutar migraciones de Prisma
pnpm migrate-dev

# Iniciar el servidor de desarrollo
pnpm dev
```

---

## 🧩 Scripts disponibles

| Comando              | Descripción                          |
| -------------------- | ------------------------------------ |
| `pnpm dev`           | Inicia el entorno de desarrollo      |
| `pnpm build`         | Compila el proyecto para producción  |
| `pnpm start`         | Inicia la app compilada              |
| `pnpm prisma-studio` | Abre el panel de Prisma              |
| `pnpm migrate-dev`   | Ejecuta migraciones de base de datos |

---

## 🧠 Aprendizajes

Este proyecto sirve como práctica para integrar:

* Autenticación moderna con Clerk.
* ORM con Prisma y PostgreSQL.
* API typesafe con tRPC.
* Buenas prácticas en Next.js (App Router y estructura modular).

---

## 📜 Licencia

Este proyecto es de uso personal y educativo. Puedes usarlo como referencia para tus propios proyectos.
