const discord = require('discord.js')
exports.run = async(client, message , args) => {
let engin = new discord.MessageEmbed()
.setAuthor('Belorya Motor Marketi Menüsü')
.setDescription('Yamaha X-MAX 150 = **!satınal yamaha-xmax** \nHonda CBR 125R = **!satınal honda-125r** \nYamaha YZF R25 = **!satınal yamaha-r25** \nKTM 250 EXC = **!satınal ktm-exc** \nYamaha MT-07 = **!satınal yamaha-mt07**\n Yamaha YZF R1 = **!satınal yamaha-yzf-r1** \nBMW S1000RR = **!satınal bmw-s1000-rr** \n\n**Fiyat Bilgisi İçin <#825913294215839785> Kanalına Bakınız**')
.setThumbnail('https://cdn.discordapp.com/icons/825911059877330954/f4082b91578ff2b90fee98018a0570e0.png?size=128')
.setFooter('Fiyat Bilgilendirmesi Motor Galeri Kanalında')
.setTimestamp()
.setColor('BLUE')
message.channel.send(engin)
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["motor-marketi", "motor-market","motorlar"],
    permLevel: 0
  };
  
  exports.help = {
    name: 'market-motor' 
  }
