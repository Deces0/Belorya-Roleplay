const Discord = require("discord.js");
 
exports.run = async (client, message, args) => {
let embed = new Discord.MessageEmbed()
.setColor('DARKBLUE')
.setTitle('Fiyat Listesi')
.setDescription(`
Tofaş Şahin:35.000 TL [tofaş]\n
Opel Astra:67,500 TL [opel-astra]\n
BMW coupe:95,700 TL [bwm]\n
Range Rover:100,000 TL [range-rover]\n
Dacia Duster:130,000 TL [dacia]\n
Auidi Sedan:205,000 TL [auidi]\n
Ninja 250:20,000 TL [ninja250]\n
Honda CBR: 30,000 TL [hondacbr]\n
Harley Davidson:65.000 TL [harley]\n
Telefon Hattı : 500 TL [hat]\n
Telefon : 3.000 TL [telefon]\n
Kedi:1760 TL [kedi]\n
Pitbul: 2280 TL [pitbull]\n
Golden Köpeği: 3100 TL [golden]\n
Apartman dairesi:150.000 TL[daire]\n
Bahçeli Ev:350,000 TL[bahçeliev]\n
Villa:500,000 TL[villa]\n
Malikane: 1,000,000 TL[malikane]\n
Kelebek:1000 TL[kelebek]\n
Glock-19: 3700 TL[glock19]\n
Baretta: 4280 TL[baretta]\n
AK-47: 12,000 TL[ak47]\n
M4A4:18,000 TL[m4a4]\n
`)
.setFooter(message.guild.name , message.guild.iconURL({dynamic : true}))
.setTimestamp()
message.channel.send(embed)
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
   };
   
   exports.help = {
    name: 'fiyat',
    description: 'Botun Pingini Resimle Gösterir.',
    usage: 'ping'
   };