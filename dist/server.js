"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = __importDefault(require("fastify"));
const cors_1 = __importDefault(require("@fastify/cors"));
const jwt_1 = __importDefault(require("@fastify/jwt"));
const message_1 = require("./routes/message");
async function bootstrap() {
    const fastify = (0, fastify_1.default)({
        logger: true
    });
    await fastify.register(cors_1.default, {
        credentials: true,
        origin: '*'
    });
    await fastify.register(jwt_1.default, {
        secret: 'gui-messager'
    });
    await fastify.register(message_1.messageRoutes);
    await fastify.listen({ port: 3333, host: '0.0.0.0' });
}
bootstrap();
