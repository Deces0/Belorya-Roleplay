const Discord = require("discord.js");
const { JsonDatabase, YamlDatabase } = require("wio.db");
const db = new JsonDatabase("./database/bakiye");
exports.run = async (client, message, args) => {
let ayar = args[0]
const bursa = '837803655372996659'
const istanbul = '837803613388013649'
const izmir = '837803651179085857'
const ankara = '837803643549646918'
const antalya = '837803669881749575'

if(!ayar) return message.reply('Bir şehir belirtin! Şehir listesi = <Bursa/Ankara/İstanbul/Antalya/İzmir>')
if(ayar === 'Bursa')
{
    await client.guilds.cache.get(message.guild.id).members.cache.get(message.author.id).roles.add(bursa);
    try {
        await client.guilds.cache.get(message.guild.id).members.cache.get(message.author.id).roles.remove(istanbul)
        await client.guilds.cache.get(message.guild.id).members.cache.get(message.author.id).roles.remove(izmir)
        await client.guilds.cache.get(message.guild.id).members.cache.get(message.author.id).roles.remove(ankara)
        await client.guilds.cache.get(message.guild.id).members.cache.get(message.author.id).roles.remove(antalya)
    } catch(err) {}
    db.math(`${message.guild.id}_${message.author.id}_bakiye`, '-', 1000)
    message.reply('Para kesildi ve şehrin değiştirildi!')
}
if(ayar === 'İstanbul')
{
    await client.guilds.cache.get(message.guild.id).members.cache.get(message.author.id).roles.add(istanbul);
    try {
        await client.guilds.cache.get(message.guild.id).members.cache.get(message.author.id).roles.remove(bursa)
        await client.guilds.cache.get(message.guild.id).members.cache.get(message.author.id).roles.remove(izmir)
        await client.guilds.cache.get(message.guild.id).members.cache.get(message.author.id).roles.remove(ankara)
        await client.guilds.cache.get(message.guild.id).members.cache.get(message.author.id).roles.remove(antalya)
    } catch(err) {}
    db.math(`${message.guild.id}_${message.author.id}_bakiye`, '-', 1000)
    message.reply('Para kesildi ve şehrin değiştirildi!')
}
if(ayar === 'Ankara')
{
    await client.guilds.cache.get(message.guild.id).members.cache.get(message.author.id).roles.add(ankara);
    try {
        await client.guilds.cache.get(message.guild.id).members.cache.get(message.author.id).roles.remove(istanbul)
        await client.guilds.cache.get(message.guild.id).members.cache.get(message.author.id).roles.remove(izmir)
        await client.guilds.cache.get(message.guild.id).members.cache.get(message.author.id).roles.remove(bursa)
        await client.guilds.cache.get(message.guild.id).members.cache.get(message.author.id).roles.remove(antalya)
    } catch(err) {}
    db.math(`${message.guild.id}_${message.author.id}_bakiye`, '-', 1000)
    message.reply('Para kesildi ve şehrin değiştirildi!')
}
if(ayar === 'Antalya')
{
    await client.guilds.cache.get(message.guild.id).members.cache.get(message.author.id).roles.add(antalya);
    try {
        await client.guilds.cache.get(message.guild.id).members.cache.get(message.author.id).roles.remove(istanbul)
        await client.guilds.cache.get(message.guild.id).members.cache.get(message.author.id).roles.remove(izmir)
        await client.guilds.cache.get(message.guild.id).members.cache.get(message.author.id).roles.remove(ankara)
        await client.guilds.cache.get(message.guild.id).members.cache.get(message.author.id).roles.remove(bursa)
    } catch(err) {}
    db.math(`${message.guild.id}_${message.author.id}_bakiye`, '-', 1000)
    message.reply('Para kesildi ve şehrin değiştirildi!')
}
if(ayar === 'İzmir')
{
    await client.guilds.cache.get(message.guild.id).members.cache.get(message.author.id).roles.add(izmir);
    try {
        await client.guilds.cache.get(message.guild.id).members.cache.get(message.author.id).roles.remove(istanbul)
        await client.guilds.cache.get(message.guild.id).members.cache.get(message.author.id).roles.remove(antalya)
        await client.guilds.cache.get(message.guild.id).members.cache.get(message.author.id).roles.remove(ankara)
        await client.guilds.cache.get(message.guild.id).members.cache.get(message.author.id).roles.remove(bursa)
    } catch(err) {}
    db.math(`${message.guild.id}_${message.author.id}_bakiye`, '-', 1000)
    message.reply('Para kesildi ve şehrin değiştirildi!')
}
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
   };
   
   exports.help = {
    name: 'git',
    description: 'Botun Pingini Resimle Gösterir.',
    usage: 'ping'
   };