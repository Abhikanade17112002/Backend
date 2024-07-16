//  dotenv
require('dotenv').config();


const  { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds,GatewayIntentBits.MessageContent,GatewayIntentBits.GuildMessages] });
client.on('messageCreate', (message) => {
    if( message.author.bot){
        return ;
    }
    
    message.reply({
        content:"Hello From Bot !!!" ,
    })
  });
  client.on('interactionCreate', async interaction => {
    if (!interaction.isChatInputCommand()) return;
  
    if (interaction.commandName === 'ping') {
      await interaction.reply('Pong!');
    }
  });

  client.login(process.env.TOKEN) ;