import { FastifyInstance } from 'fastify';
import { prisma } from '../lib/prisma'

import { z } from 'zod'

export async function messageRoutes(fastify: FastifyInstance) {
    fastify.get('/messages/count', async () => {
        const count = await prisma.message.count();
        return { count }
    })

    fastify.post('/messages/create', async (request, replay) => {

        const createMessageBody = z.object({
            name: z.string(),
            cellphone: z.string(),
            text: z.string(),
            message: z.string(),
            reply:z.string()
        })

        const { name, cellphone, text, message,reply } = createMessageBody.parse(request.body)

        const _message = await prisma.message.create({
            data: {
                name, cellphone, text, message,reply
            }
        })

        return { _message }
    })

    fastify.get('/messages/:cellphone/:from', async (request) => {

        const getMessageBody = z.object({
            cellphone: z.string(),
            from: z.string()
        })

        const { cellphone,from } = getMessageBody.parse(request.params)

        const messages = await prisma.message.findMany({
            where: {
                cellphone: cellphone,
                text: from,
            },
            orderBy: {
                id: 'asc'
            }
        })

        return {
            messages
        }
    })

    fastify.post('/messages/:cellphone/:from/reset', async (request) => {

        const getMessageBody = z.object({
            cellphone: z.string(),
            from: z.string()
        })

        const { cellphone,from } = getMessageBody.parse(request.params)

        const messages = await prisma.message.deleteMany({
            where: {
                cellphone: cellphone,
                text: from
            }
        })

        return {
            messages
        }
    })
}