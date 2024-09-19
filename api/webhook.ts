import express, { Request, Response } from 'express';
import { Telegraf, Context } from 'telegraf';

const app = express();
const bot = new Telegraf(process.env.BOT_TOKEN as string);

bot.on('text', (ctx: Context) => {
  ctx.reply('Hello from your Vite app on Vercel!');
});

bot.command('start', (ctx) => {
  ctx.reply('Welcome! I\'m your bot. How can I help you?');
});

// Handle text messages
bot.on('text', (ctx) => {
  const message = ctx.message.text.toLowerCase();
  
  if (message.includes('hello')) {
    ctx.reply('Hello there!');
  } else if (message.includes('how are you')) {
    ctx.reply('I\'m doing great, thanks for asking!');
  } else {
    ctx.reply('I received your message: ' + ctx.message.text);
  }
});

// Handle stickers
bot.on('sticker', (ctx) => {
  ctx.reply('That\'s a nice sticker!');
});

app.use(express.json());
app.post('/api/webhook', (req: Request, res: Response) => {
  bot.handleUpdate(req.body, res);
});

export default app;