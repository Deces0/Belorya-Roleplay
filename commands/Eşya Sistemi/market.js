const discord = require('discord.js')
exports.run = async(client, message , args) => {
let engin = new discord.MessageEmbed()
.setTitle('Market Menüsü')
.setThumbnail('https://cdn.discordapp.com/icons/825911059877330954/f4082b91578ff2b90fee98018a0570e0.png?size=128')
.setDescription('`!market-araba & !market-motor & !market-ev & !market-hayvan & !market-silah`')
.setColor('BLUE')
.setFooter('Belorya Roleplay')
.setTimestamp()
message.channel.send(engin)
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
  
  exports.help = {
    name: 'market' 
  }