const { Client, Intents, Message, MessageEmbed, MessageActionRow, MessageButton, Collection } = require('discord.js');
const config =  require("../settings.json")
const moment = require("moment")
const taglıdata = require("../models/taglı")
exports.execute = async (client, message, args) => {
  let embed = new MessageEmbed()
  .setAuthor({ name: message.guild.name, iconURL: message.guild.iconURL({ dynamic: true }) })
  .setFooter({ text: config.footer.toString() , iconURL: message.guild.iconURL({ dynamic: true }) })
  .setColor(`RANDOM`)
  if(message.author.id !== config.owners) return message.reply("sadece geliştirici kullabilir").then(msg => {setTimeout(() => msg.delete(), 5000);});
    if(!args[0]) {
    message.channel.send({embeds :[embed.setDescription(`[${client.emojis.cache.find(chaos => chaos.name === "warn")} **HATA**] Kullanım hatası.\n Yanlış Kullandin. \`Örnek: .taglıalım [aç]/[kapat]\` `)]}).then(msg => {setTimeout(() => msg.delete(), 5000);});
    return;    
    }
    if (args[0] === "aç") {
        await taglıdata.updateOne({ guildId: message.guild.id }, { $set: { taglıalım: true } }, { upsert: true });
    message.channel.send({ embeds : [embed.setDescription(`Taglı alım sistemi aktif edildi! ${client.emojis.cache.find(chaos => chaos.name === "aktif")}`)]}).then(msg => {setTimeout(() => msg.delete(), 5000);});
    return;    
    } else if (args[0] === "kapat") {
        await taglıdata.updateOne({ guildId: message.guild.id }, { $set: { taglıalım: false } }, { upsert: true });
    message.channel.send({ embeds : [embed.setDescription(`Taglı alım sistemi devre dışı bırakıldı! ${client.emojis.cache.find(chaos => chaos.name === "deaktif")}`)]}).then(msg => {setTimeout(() => msg.delete(), 5000);});
    return;    
    };
    taglıdata.save();
}
exports.conf = {
  command: "taglıalım",
  description: "",
  aliases: []
}