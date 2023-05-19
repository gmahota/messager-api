"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.messageRoutes = void 0;
const prisma_1 = require("../lib/prisma");
const zod_1 = require("zod");
async function messageRoutes(fastify) {
    fastify.get('/messages/count', async () => {
        const count = await prisma_1.prisma.message.count();
        return { count };
    });
    fastify.post('/messages/create', async (request, replay) => {
        const createMessageBody = zod_1.z.object({
            name: zod_1.z.string(),
            cellphone: zod_1.z.string(),
            text: zod_1.z.string(),
            message: zod_1.z.string(),
            reply: zod_1.z.string()
        });
        const { name, cellphone, text, message, reply } = createMessageBody.parse(request.body);
        const _message = await prisma_1.prisma.message.create({
            data: {
                name, cellphone, text, message, reply
            }
        });
        return { _message };
    });
    fastify.get('/messages/:cellphone/:from', async (request) => {
        const getMessageBody = zod_1.z.object({
            cellphone: zod_1.z.string(),
            from: zod_1.z.string()
        });
        const { cellphone, from } = getMessageBody.parse(request.params);
        const messages = await prisma_1.prisma.message.findMany({
            where: {
                cellphone: cellphone,
                text: from,
            },
            orderBy: {
                id: 'asc'
            }
        });
        return {
            messages
        };
    });
}
exports.messageRoutes = messageRoutes;
