const Discord = require("discord.js");   //É feita a requisição do Discord.js
const bot = new Discord.Client({ disableEveryone: true });     //É feita a iniciação do bot através da requisição
const { prefix, token } = require('./botconfigs.json');  // Variável para usar o prefixo.


var inicio = () => {
    bot.login(`${token}`); // Iniciação do bot

    bot.on("ready", async () => { // Função de inicializaçãod o bot no terminal e mensagem de atividade
        console.log(`${bot.user.username} is online!`);
        bot.user.setActivity('As lágrimas do meu desenvolvedor', { type: 'LISTENING' })
        bot.user.setUsername('Horus Bot');
        //bot.user.setAvatar('')
    });
}

var mensagens = () => {
    // Função para as mensagens recebidas pelos usuários
    bot.on("message", async message => {
        if (message.content === `${prefix}ping`) {
            message.channel.send('Pong.');
        }
        else if (message.content === `${prefix}hehe`) {
            const usuario = bot.users.cache.get('ID');
            usuario.send('Exemplo');
        } //test

        else if (message.content === `${prefix}k`) {
            const channel = bot.channels.cache.get('ID Channel');
            channel.send(':heart:');
        }


    })
}


