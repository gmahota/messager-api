import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

async function main() {
    const message = await prisma.message.create(
        {
            data: {
                name: 'Joana Bastos',
                cellphone: '1234567890',
                text: 'Hello',
                message: 'This is a message',
                reply: 'Hello World',
                //json: { foo: 'bar' }
            }
        }
    )
}

main()