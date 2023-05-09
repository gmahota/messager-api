import { FastifyInstance } from 'fastify';
import { prisma } from '../lib/prisma'

import { z } from 'zod'

export async function messageRoutes(fastify: FastifyInstance) {
    fastify.get('/messages/count', async () => {
        const count = await prisma.message.count();
        return { count }
    })

    fastify.post('/messages/create', async (request, repl) => {

        const createMessageBody = z.object({
            name: z.string(),
            cellphone: z.string(),
            text: z.string(),
            message: z.string(),
            replay:z.string()
        })

        const { name, cellphone, text, message,replay } = createMessageBody.parse(request.body)

        const _message = await prisma.message.create({
            data: {
                name, cellphone, text, message,replay
            }
        })

        return { _message }
    })
}