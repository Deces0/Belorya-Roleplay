const Discord = require("discord.js");
 
exports.run = function(client, message, args) {
  var öneri = args.slice(0).join(" ");
 
  var guildID = "836873530720256050";
 
  var channelID = "826125168388734986"; 
 
  if (!öneri) {
    return message.reply(
      "Bir mesaj belirtin! Doğru kullanım: **!istek <mesaj> **"
    );
  } else {
    var embed = new Discord.MessageEmbed()
 
      .setTimestamp()
 
      .setColor("#fa0101")
 
      .addField("Eylem:", "Öneri")
 
      .addField("Kullanıcı:", message.author.tag)
 
      .addField("ID", message.author.id)
 
      .addField("Öneri", öneri)

      .setImage("https://images-ext-1.discordapp.net/external/Bb032GyJs8yCJiUy7tWQ-YnNRPreLuPDo-xp66eOIeU/https/images-ext-2.discordapp.net/external/H1PQhcDr-EaEvwENT8cUxj8S2yonFZl351YbXXH5sGs/https/media.discordapp.net/attachments/697145772801785876/716671769355747348/1.gif")
 
      client.guilds
      .cache.get(guildID)
      .channels.cache.get(channelID)
      .send(embed);
    message.delete()
    client.users.cache.get(message.author.id).send("Öneriniz alınmıştır! Teşekkür ederiz...");
  }
};
 
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
 };
 
 exports.help = {
  name: 'öneri',
  description: 'Botun Pingini Resimle Gösterir.',
  usage: 'ping'
 };
