const discord = require('discord.js')
exports.run = async(client, message , args) => {
let engin = new discord.MessageEmbed()
.setAuthor('Belorya Ev Marketi Menüsü')
.setDescription('Apartman Dairesi = **!satınal apartman-dairesi** \nDağ Evi = **!satınal dağ-evi** \nLüx Villa = **!satınal villa** \nMalikâne = **!satınal malikane** \n\n**Fiyat Bilgisi İçin <#825913291917361163> Kanalına Bakınız**  ')
.setThumbnail('https://cdn.discordapp.com/icons/825911059877330954/f4082b91578ff2b90fee98018a0570e0.png?size=128')
.setFooter('Fiyat Bilgilendirmesi Emlak Kanalında')
.setTimestamp()
.setColor('BLUE')
message.channel.send(engin)
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["ev-marketi", "ev-market", "evler"],
    permLevel: 0
  };
  
  exports.help = {
    name: 'market-ev' 
  }
