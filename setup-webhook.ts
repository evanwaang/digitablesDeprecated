import { Telegraf } from 'telegraf';

const setupWebhook = async () => {
  const bot = new Telegraf(process.env.BOT_TOKEN as string);
  try {
    await bot.telegram.setWebhook('https://plinko-tau.vercel.app/api/webhook');
    console.log('Webhook set successfully');
  } catch (error) {
    console.error('Error setting webhook:', error);
  }
};

setupWebhook().catch(error => console.error('Failed to set up webhook:', error));

export default setupWebhook;