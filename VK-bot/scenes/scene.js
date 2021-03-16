const Scene = require('node-vk-bot-api/lib/scene');
const Markup = require('node-vk-bot-api/lib/markup');

const keyboard = Markup.keyboard([
  [Markup.button('Узнать о HSE3x3', 'primary')],
  [
    Markup.button('Связаься с администраторами', 'primary'),
    Markup.button('Почесать жопу', 'negative'),
  ],
  [Markup.button('Хочу поиграть', 'positive')],
]);

export default scene = new Scene(
  'main',
  (ctx) => {
    ctx.scene.next();
    ctx.reply('Выбери, чем хочешь заняться.', null, keyboard);
  },
  (ctx) => {
    switch (ctx.message.text) {
      case 'Узнать о HSE3x3':
        ctx.reply('История лиги');
        break;
      case '':
        break;
      case 'Хочу поиграть':
        ctx.scene.leave();
        ctx.scene.enter('games');
        break;
      case 'Связаься с администраторами':
        ctx.reply('Сейчас позову');
        break;
      default:
        ctx.reply(
          'Я пока не умею отвечать на такие сообщения =( Ты можешь взаимодействовать со мной с помощью кнопок внизу.'
        );
        break;
    }
  }
);
