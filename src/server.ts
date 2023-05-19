import Fastify from 'fastify'
import cors from '@fastify/cors'
import jwt from '@fastify/jwt'

import { messageRoutes } from './routes/message'

async function bootstrap() {
    const fastify = Fastify({
        logger: true
    })

    await fastify.register(cors, {
        credentials: true,
        origin: '*'
    })

    await fastify.register(jwt, {
        secret: 'gui-messager'
    })

    await fastify.register(messageRoutes)

    await fastify.listen({ port: 3333, host: '0.0.0.0' })
}

bootstrap() 