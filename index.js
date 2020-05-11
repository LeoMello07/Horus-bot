const Discord = require("discord.js");   //É feita a requisição do Discord.js
const bot = new Discord.Client({ disableEveryone: true });     //É feita a iniciação do bot através da requisição
const { prefix, token } = require('./botconfigs.json');  // Variável para usar o prefixo.


bot.login(`${token}`); // Iniciação do bot

bot.on("ready", async () => { // Função de inicializaçãod o bot no terminal e mensagem de atividade
    console.log(`${bot.user.username} is online!`);
    /*
    ..
    .. 
    .. 
    . 
        Colocar funções como 'Em quantos servidores o bot tá', quantos usuários possuem em todos os severs, logs de comandos, etc
     */
    bot.user.setActivity('Meu desenvolvedor não sabe o que faz', { type: 'PLAYING' })
    //bot.user.setUsername('Horus Bot');
    //bot.user.setAvatar('./.github/horusavatar.png');
})


// Função para as mensagens recebidas pelos usuários. Esse é uma das principais funções
bot.on("message", async message => {


    //let messageArray = message.content.split(" ");
    let cmd = message.content;
    //let args = message.messageArray.slice(1);
    if (message.author.bot) return;
    if (message.channel.type == "dm") return;


    // Manda uma mensagem no mesmo canal que foi feito o comando. 
    if (cmd === `${prefix}ping`) {
        message.channel.send('pong!');
    }

    // Informações do servidor
    if (cmd === `${prefix}serverinfo`) {
        const serverEmbed = new Discord.MessageEmbed()
            .setColor('#d95e40')
            .setTitle('Informações do servidor')
            .setThumbnail(message.guild.iconURL())
            .addFields(
                { name: 'Nome do servidor', value: message.guild.name },
                { name: 'Dono do servidor', value: message.guild.owner },
                { name: 'Criado em', value: message.guild.createdAt.toUTCString().substr(0, 16), inline: true },
                { name: 'Você entrou em', value: message.member.joinedAt.toUTCString().substr(0, 16), inline: true },
                { name: 'Membros', value: message.guild.memberCount, inline: true },
            )
        message.reply(serverEmbed)
    }

    // Comandos de help

    if (cmd === `${prefix}help`) {
        const helpEmbed = new Discord.MessageEmbed()
            .setColor('#d95e10') //cor do Horus é d95e40, botei d95e10 porque é mais forte
            .setTitle('Ajuda do tio Horus')
            .setThumbnail('https://raw.githubusercontent.com/luizeduardomr/Horus-bot/master/.github/horusavatar.png')
            .setDescription("Olá " + "<@" + message.member.user.id + ">" + "! Eu sou o Horus, mas você já deve saber disso.. Eu sou um bot" +
                " construído para atender todas as suas necessida... é... o-ou quase todas... \n \nEnfim, logo abaixo terá um link contendo todos" +
                " os comandos disponíveis atualmente, ok? \n \nCaso tenha sugestões de comandos novos, entre no meu servidor oficial!")
            .setURL('https://discord.gg/DwYtPue')
            .addFields(
                { name: 'Lista de comandos', value: 'https://raw.githubusercontent.com/luizeduardomr/Horus-bot/master/.github/horusavatar.png' },
                { name: 'Me ajuda a ficar online!', value: 'https://raw.githubusercontent.com/luizeduardomr/Horus-bot/master/.github/horusavatar.png' },
                { name: 'Siga o meu criador lindo e maravilhoso no Instagram!', value: 'https://www.instagram.com/luizdudu' },
            )

        message.reply(helpEmbed)
        /*   const inviteDiscord = await (envia1)
               if (inviteDiscord) {
               message.reply('https://discord.gg/DwYtPue')
           }
   
           */
        message.reply('https://discord.gg/DwYtPue')
    }


    // Informações do bot
    if (cmd === `${prefix}botinfo`) {
        const exampleEmbed = new Discord.MessageEmbed()
            .setColor('#d95e40')
            .setTitle('Informações do bot')
            .setURL('https://github.com/luizeduardomr/Horus-bot')
            .setThumbnail('https://raw.githubusercontent.com/luizeduardomr/Horus-bot/master/.github/horusavatar.png')
            .addFields(
                { name: 'Nome', value: `${bot.user.username} `, inline: true },
                { name: 'Criado em', value: `${bot.user.createdAt.toUTCString().substr(0, 16)} `, inline: true },
            )
            .setFooter('Feito com amor e carinho por luiz#3996 <3', 'https://github.com/luizeduardomr');

        message.reply(exampleEmbed);
    }
    //Envia uma mensagem privada para o usuário
    if (cmd === `${prefix}a`) {
        const usuario = bot.users.cache.get('ID');
        for (var i = 0; i < 5; i++) {
            usuario.send('flood');
        }
    }

    // Envia uma mensagem para o canal selecionado
    if (cmd === `${prefix} tess`) {
        const channel = bot.channels.cache.get('Canal ID');
        channel.send('Mensagem de teste');
    }

    /*bot.on('guildMemberAdd', member => {
        const channel = member.guild.channels.cache.find(ch => ch.name === 'member-log');
        if (!channel) return;
    
    */    //channel.send(`Bem vindo ao servidor, ${ member } !`);
});
    /* bot.on('message', message => {
if (cmd === '!join') {
bot.emit('guildMemberAdd', message.member);
}
});
*/


