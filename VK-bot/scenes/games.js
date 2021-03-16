const Scene = require('node-vk-bot-api/lib/scene');
const Markup = require('node-vk-bot-api/lib/markup');

const keyboard = Markup.keyboard([
  [Markup.button('Выбрать дату', 'primary')],
  [Markup.button('Назад', 'negative')],
]);

export default scene = new Scene(
  'games',
  (ctx) => {
    ctx.scene.next();
    ctx.reply('Тут ты увидишь доступные игры', null, keyboard);
  },
  (ctx) => {
    switch (ctx.message.text) {
      case 'Выбрать дату':
        ctx.reply('История лиги');
        break;
      case 'Назад':
        ctx.scene.leave();
        ctx.scene.enter('main');
        break;
      default:
        ctx.reply(
          'Я пока не умею отвечать на такие сообщения =( Ты можешь взаимодействовать со мной с помощью кнопок внизу.'
        );
        break;
    }
  }
);
