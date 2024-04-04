import { prisma } from "../src/lib/prisma"

async function seed() {
    await prisma.event.create({
        data: {
            id: '116e9546-85f6-4f56-b712-a5529ab54bfd',
            title: 'Best Event',
            slug: 'best-event',
            details: 'The best event ever!',
            maximumAttendees: 100,
        }
    })
}

seed().then(() => {
    console.log('✅ Database seeded!')
    prisma.$disconnect()
})