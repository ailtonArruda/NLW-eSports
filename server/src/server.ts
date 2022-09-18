import express from 'express';
import { PrismaClient } from '@prisma/client';
import { convertHourStringToMinutes } from './utils/convertHours';
import { convertMinuteToHourString } from './utils/convertMinutes';
import cors from 'cors';

const app = express()

app.use(express.json())

// controle de requisição vinda do front-end
app.use(cors())

const prisma = new PrismaClient({
    log: ['query']
})

//localhost:3333/ads

// listar games
app.get('/games', async (resquest, response) => {
    const games = await prisma.game.findMany({
        // conta quantos anuncios tem do game
        include: {
            _count: {
                select: {
                    ads: true,
                }
            }
        }
    })

    return response.json(games);
});

// criar ad
app.post('/games/:id/ads', async (request, response) => {
    const gameId = request.params.id;
    const body: any = request.body;

    // precisa validação (zod javascript)
    const ad = await prisma.ad.create({
        data: {
            gameId,          
            name: body.name,
            yearsPlaying: body.yearsPlaying,   
            discord: body.discord,
            weekDays: body.weekDays.join(','),
            hourStart: convertHourStringToMinutes(body.hourStart),
            hourEnd: convertHourStringToMinutes(body.hourEnd),
            useVoiceChannel: body.useVoiceChannel,
        },
    })
    
    console.log(body)

    return response.status(201).json(ad);
});

// listar ad por game
app.get('/games/:id/ads', async (request, response) => {
    const gameId = request.params.id;

    const ads = await prisma.ad.findMany({
        select: {
            id: true,
            name: true,
            weekDays: true,
            useVoiceChannel: true,
            yearsPlaying: true,
            hourStart: true,
            hourEnd: true
        },
        where: {
            gameId: gameId,
        },
        orderBy: {
            createdAt: 'desc',
        }
    })

    return response.json(ads.map(ad => {
        return {
            ...ad,
            weekDays: ad.weekDays.split(','),
            hourStart: convertMinuteToHourString(ad.hourStart),
            hourEnd: convertMinuteToHourString(ad.hourEnd)
        }
    }));
});

// listar discord por ad
app.get('/ads/:id/discord', async (request, response) => {
    const adId = request.params.id;
    
    const ad = await prisma.ad.findFirstOrThrow({
        select: {
            discord: true,
        },
        where: {
            id: adId,
        }
    })

    return response.json({
        discord: ad.discord,
    });
});



app.listen(3333);