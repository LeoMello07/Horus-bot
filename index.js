const botconfig = require("./botconfig.json");
const Discord = require("discord.js");   //Discord API with DiscordJS required
const bot = new Discord.Client({ disableEveryone: true });     //Bot initiation

const { prefix, token } = require('./botconfig.json');
bot.login(botconfig.token);

bot.on("ready", async () => {
    console.log(`${bot.user.username} is online!`);
    bot.user.setActivity('As lágrimas do meu desenvolvedor', { type: 'LISTENING' })
});

bot.on("message", async message => {
    if (message.content === `${prefix}ping`) {
        message.channel.send('Pong.');
    }
    else if (message.content === `${prefix}hehe`) {
        const usuario = bot.users.cache.get('ID');
        usuario.send('Exemplo');
    }

    else if (message.content === `${prefix}k`) {
        const channel = bot.channels.cache.get('ID Channel');
        channel.send(':heart:');
    }


})

            //const luiz = bot.users.fetch('657770685866967040').catch();
            //console.log(bot.users.fetch('657770685866967040'));
            //console.log(bot.users.fetch(657770685866967040, true).username);

            //luiz.send('OI LUIZ KKKKKK');

