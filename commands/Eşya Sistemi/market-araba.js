const discord = require('discord.js')
exports.run = async(client, message , args) => {
let engin = new discord.MessageEmbed()
.setAuthor('Belorya Araba Marketi Menüsü')
.setDescription('Peugeot 206+ = **!satınal peugeot-206** \nRenault Clio = **!satınal clio** \nCitroen C4 = **!satınal citroen-c4** \nVolkswagen Passat = **!satınal passat**\nMercedes-Benz E200 = **!satınal e200**\n Audi A5 S-Line = **!satınal audi-a5** \nBMW 5.25 M = **!satınal bmw-525** \nMercedes-Benz G63 AMG = **!satınal g62-amg** \nPorsche 911 Turbo = **!satınal porsche-911** \nLamborghini Huracan = **!satınal huracan** \n\n**Fiyat Bilgisi İçin <#825913293230833784> Kanalına Bakınız** ')
.setThumbnail('https://cdn.discordapp.com/icons/825911059877330954/f4082b91578ff2b90fee98018a0570e0.png?size=128')
.setFooter('Fiyat Bilgilendirmesi Oto Galeri Kanalında')
.setTimestamp()
.setColor('BLUE')
message.channel.send(engin)
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["araba-marketi", "araba-market", "arabalar"],
    permLevel: 0
  };
  
  exports.help = {
    name: 'market-araba' 
  }
