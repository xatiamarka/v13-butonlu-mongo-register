const { Client, Intents, Message, MessageEmbed, MessageActionRow, MessageButton, Collection } = require('discord.js');
const config =  require("../settings.json")
exports.execute = async (client, message, args) => {
  let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]); 
  let embed = new MessageEmbed()
  .setAuthor({ name: message.guild.name, iconURL: message.guild.iconURL({ dynamic: true }) })
  .setFooter({ text: config.footer.toString() , iconURL: message.guild.iconURL({ dynamic: true }) })
  .setColor("RANDOM")
  if (!message.member.roles.cache.has(config.registery) && !message.member.permissions.has("ADMINISTRATOR")) return message.channel.send("Yetkiniz Yeterli Değil").then(msg => {setTimeout(() => msg.delete(), 5000);});
  if(!member) return message.reply( { embeds : [embed.setDescription("Kayitli Bir Üye Bulunamadi")]}).then(msg => {setTimeout(() => msg.delete(), 5000);});
  if (member.roles.highest.position >= message.member.roles.highest.position) return message.channel.send({ embeds: [embed.setDescription(`İşlem geçersiz, senden üst && aynı pozisyonda birisine bunu yapamazsın.`)] }).then(msg => {setTimeout(() => msg.delete(), 5000);});
  if(member.roles.cache.get(config.vip)) {
      member.roles.remove(config.vip) 
      message.reply(` ${member} Üyesinde Vip Rolu Alindi`).then(msg => {setTimeout(() => msg.delete(), 5000);});
  } else {
      member.roles.add(config.vip) 
      message.reply(`${member} Üyesinde Başariyla Vip Rolü Verildi`).then(msg => {setTimeout(() => msg.delete(), 5000);});
  }
}   
exports.conf = {
  command: "vip",
  description: "",
  aliases: []
}
