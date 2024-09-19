import { VercelRequest, VercelResponse } from '@vercel/node';
import { Telegraf } from 'telegraf';

const bot = new Telegraf(process.env.BOT_TOKEN as string);

bot.command('start', (ctx) => {
  ctx.reply('Welcome! I\'m your bot. How can I help you?');
});

// Add more bot commands here

export default async function handler(req: VercelRequest, res: VercelResponse) {
  try {
    if (req.method === 'POST') {
      await bot.handleUpdate(req.body, res);
    } else {
      res.status(405).send('Method Not Allowed');
    }
  } catch (error) {
    console.error('Error in webhook handler:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}