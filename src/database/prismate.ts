import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

async function main() {
    const allUsers = await prisma.user.findMany();
    console.log(allUsers)
}

main()
    .catch((e) => {
        console.log(e)
        throw e
    })
    .finally(async () => {
        await prisma.$disconnect()
    })