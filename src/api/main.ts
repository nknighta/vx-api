import * as express from 'express';
import { PrismaClient } from '@prisma/client';
export const v1 = express();
const prisma = new PrismaClient();

v1.get('/', (req, res) => {
    res.send(`v1 api`);
});

v1.post('/create', async (req, res) => {
    const data = req.body;
    try {
        const user = await prisma.user.create({
            data: {
                name: data.name,
                email: data.email,
            },
        });
        res.send(user);
    } catch (error) {
        res.status(400).send(error);
    }
});

v1.delete('/delete/:id', async (req, res) => {
    const id = Number(req.params.id);
    try {
        const user = await prisma.user.delete({
            where: {
                id: id,
            },
        });
        res.send(user);
    } catch (error) {
        res.status(400).json({ error: `User with ID ${id} does not exist in the database` });
    }
});

v1.get('/user/:d', async (req, res) => {
    const d = Number(req.params.d);
    try {
        const user = await prisma.user.findMany({
            where: {
                id: d,
            },
        });
        res.send(user);
    } catch (error) {
           res.status(400).send(error);
    }
});