const discord = require('discord.js')
exports.run = async(client, message , args) => {
let engin = new discord.MessageEmbed()
.setAuthor('Belorya Silah Marketi Menüsü')
.setDescription('CZ 75 = **!satınal cz-75** \nGlock-19 = **!satınal glock** \nBaretta F92 = **!satınal baretta** \n\n**Fiyat Bilgisi İçin <#825913295135047740> Kanalına Bakınız**  ')
.setThumbnail('https://cdn.discordapp.com/icons/825911059877330954/f4082b91578ff2b90fee98018a0570e0.png?size=128')
.setFooter('Fiyat Bilgilendirmesi Silah Kanalında')
.setTimestamp()
.setColor('BLUE')
message.channel.send(engin)
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["silah-marketi", "silah-market", "silahlar"],
    permLevel: 0
  };
  
  exports.help = {
    name: 'market-silah' 
  }
