import { Router, Request, Response } from "express";
import { prisma } from '../lib/prisma'

import { z } from 'zod'

const messageRouter = Router();

messageRouter.get('/messages/count', async (request: Request, response: Response) => {
    const count = await prisma.message.count();
    return response.status(200).json({ count })
})

messageRouter.post('/message/create', async (request: Request, response: Response) => {

    const createMessageBody = z.object({
        name: z.string(),
        cellphone: z.string(),
        text: z.string(),
        message: z.string(),
        reply:z.string().optional()
    })

    console.log(request.body)

    const { name, cellphone, text, message,reply } = createMessageBody.parse(request.body)

    const _message = await prisma.message.create({
        data: {
            name, cellphone, text, message,reply
        }
    })

    return  response.status(200).json({ _message })
})

messageRouter.get('/messages/:cellphone/:from', async (request: Request, response: Response) => {

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

    return response.status(200).json({
        messages
    })
})

messageRouter.post('/messages/:cellphone/:from/reset', async (request: Request, response: Response) => {

    const getMessageBody = z.object({
        cellphone: z.string(),
        from: z.string()
    })

    const { cellphone,from } = getMessageBody.parse(request.params)

    await prisma.message.deleteMany({
        where: {
            cellphone: cellphone,
            text: from
        }
    })

    return response.status(200)
})

export default messageRouter;