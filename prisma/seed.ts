import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  await prisma.post.createMany({
    data: [
      {
        title: 'Bienvenida',
        text: 'Esta es tu primera nota. Podés editarla o crear una nueva.',
      },
      {
        title: 'Ideas para la app',
        text: 'Agregar búsqueda, filtros por etiquetas y modo oscuro.',
      },
      {
        title: 'Recordatorio',
        text: 'Revisar documentación de tRPC y Prisma.',
      },
    ],
  })
  console.log('Notas iniciales agregadas ✅')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
