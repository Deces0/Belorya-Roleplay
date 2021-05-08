const Discord = require("discord.js");


exports.run = async (client, message, args) => {
    const onayembed = new Discord.MessageEmbed()
    .setColor("RED")
    .setTimestamp()
    .setAuthor("Çağrı Kapatma Komutu")
    .setFooter("Onaylamak için 👍 emojisine, Red etmek içinse 👎 emojisine tıklayabilirsiniz")
    .setDescription("**UYARI!** \n\nEğer kapatma işlemini onaylarsanız bu kanal kalıcı olarak **silinecek**,\n**geri getirilemeyecektir!**\n")
    message.channel.send(onayembed).then(msg => {
  msg.react('👍').then(() => msg.react('👎'));
  
  const filter = (reaction, user) => {
      return ['👍', '👎'].includes(reaction.emoji.name) && user.id === message.author.id;
  };
  
  msg.awaitReactions(filter, { max: 1, time: 60000, errors: ['time'] })
      .then(collected => {
          const reaction = collected.first();
  
          if (reaction.emoji.name === '👍') {
        message.channel.delete();
          } else {
              message.reply('Kapatma işlemi iptal edildi!');
        msg.delete({timeout:3000})
          }
      })
      .catch(collected => {
          message.reply('Bir hatayla karşılaştık! Lütfen daha sonra tekrar deneyiniz.');
      });
    
  })
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
   };
   
   exports.help = {
    name: 'çağrı-kapat',
    description: 'Botun Pingini Resimle Gösterir.',
    usage: 'ping'
   };