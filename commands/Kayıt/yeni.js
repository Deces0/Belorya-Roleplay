const Discord = require("discord.js");
const { JsonDatabase, YamlDatabase } = require("wio.db");
const db = new JsonDatabase("./database/moderasyon");
const qdb = new JsonDatabase("./database/bakiye");
exports.run = async (client, message, args) => {
    let kişi = message.author
if(db.has(`${message.guild.id}_${kişi.id}_yenipara`) === true) return message.reply('Paranı çoktan almışsın!')
message.reply('Aramıza hoşgeldiniz! Paranız eklendi!')
qdb.add(`${message.guild.id}_${kişi.id}_bakiye`, 5000)
db.set(`${message.guild.id}_${kişi.id}_yenipara`, true)
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
   };
   
   exports.help = {
    name: 'yeni',
    description: 'Botun Pingini Resimle Gösterir.',
    usage: 'ping'
   };
