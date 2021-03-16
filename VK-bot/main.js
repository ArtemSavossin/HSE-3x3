const VkBot = require('node-vk-bot-api');
const Session = require('node-vk-bot-api/lib/session');
const Stage = require('node-vk-bot-api/lib/stage');
const dotenv = require('dotenv');

dotenv.config();

const bot = new VkBot(process.env.TOKEN);

const session = new Session();
const scene = require('./scenes/scene');
const sceneGames = require('./scenes/games');
const stage = new Stage(scene, sceneGames);

bot.use(session.middleware());
bot.use(stage.middleware());

bot.command('/start', (ctx) => {
  ctx.scene.enter('main');
});

bot.startPolling();
