import express, { Request, Response } from 'express';
import { Telegraf, Context } from 'telegraf';

const app = express();
const bot = new Telegraf(process.env.BOT_TOKEN as string);


bot.command('start', (ctx) => {
  ctx.reply('Welcome! I\'m your bot. How can I help you?');
});

app.use(express.json());
app.post('/api/webhook', (req: Request, res: Response) => {
  bot.handleUpdate(req.body, res);
});

export default app;