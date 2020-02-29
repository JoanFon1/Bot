const Discord = require('discord.js');

const client = new Discord.Client();

 

client.on('ready', () => {

    console.log('Estoy listo!');

});

 

client.on('message', message => {

    if (message.content === 'ping') {

       message.reply('pong');

       }

});

 

// THIS  MUST  BE  THIS  WAY

client.login(NjgzMjY1NTA2MTE1MTkwODQz.XlpCnA.hima6f4WL0Og1jk59Y1OacpNQPI)
