import { Telegraf } from 'telegraf';

const bot = new Telegraf("7215092552:AAEWBB1mRF4rchzwaKtS9jj-d8lakVwoXbM");

bot.telegram.setWebhook('https://plinko-tau.vercel.app/api/webhook')
  .then(() => console.log('Webhook set successfully'))
  .catch((error) => console.error('Error setting webhook:', error));