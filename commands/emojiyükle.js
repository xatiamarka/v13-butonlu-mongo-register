const { Client, Intents, Message, MessageEmbed, MessageActionRow, MessageButton, Collection } = require('discord.js');
const config =  require("../settings.json")
exports.execute = async (client, message, args) => {
  if(message.author.id !== config.owners) return
let man = "https://cdn.discordapp.com/emojis/938035479192948826.webp?size=44&quality=lossless";
let girl = "https://cdn.discordapp.com/emojis/938035330152554517.webp?size=44&quality=lossless";
let warn = "https://cdn.discordapp.com/emojis/938037286162030613.webp?size=44&quality=lossless";
let deaktif = "https://cdn.discordapp.com/emojis/926861271301767169.gif?size=44&quality=lossless";
let aktif = "https://cdn.discordapp.com/emojis/926861274170679397.gif?size=44&quality=lossless";
let hg1 = "https://cdn.discordapp.com/emojis/937820261837856768.gif?size=44&quality=lossless";
let hg2 = "https://cdn.discordapp.com/emojis/937820253537325096.gif?size=44&quality=lossless";
let hg3 = "https://cdn.discordapp.com/emojis/926162855450017835.gif?size=44&quality=lossless";
let hg4 = "https://cdn.discordapp.com/emojis/926861286061510666.gif?size=44&quality=lossless";
let hg5 = "https://cdn.discordapp.com/emojis/929429344697352272.gif?size=44&quality=lossless";
let hg6 = "https://cdn.discordapp.com/emojis/926861295544856596.gif?size=44&quality=lossless";
let hg7 = "https://cdn.discordapp.com/emojis/926664871465082891.gif?size=44&quality=lossless";
let sifir = "https://cdn.discordapp.com/emojis/937375462995411035.gif?size=96&quality=lossless";
let bir = "https://cdn.discordapp.com/emojis/937375503743062036.gif?size=96&quality=lossless";
let iki = "https://cdn.discordapp.com/emojis/937375543920308244.gif?size=96&quality=lossless";
let uc = "https://cdn.discordapp.com/emojis/937375580360437781.gif?size=96&quality=lossless";
let dort = "https://cdn.discordapp.com/emojis/937375623557558284.gif?size=96&quality=lossless";
let bes = "https://cdn.discordapp.com/emojis/937375664431038474.gif?size=96&quality=lossless";
let alti = "https://cdn.discordapp.com/emojis/937375716645949460.gif?size=96&quality=lossless";
let yedi = "https://cdn.discordapp.com/emojis/937375850570072096.gif?size=96&quality=lossless";
let sekiz = "https://cdn.discordapp.com/emojis/937375889358995466.gif?size=96&quality=lossless";
let dokuz = "https://cdn.discordapp.com/emojis/937375919243423765.gif?size=96&quality=lossless";
let empty = "https://cdn.discordapp.com/emojis/931967080624971816.webp?size=96&quality=lossless";
let emptyend = "https://cdn.discordapp.com/emojis/931967080675287091.webp?size=96&quality=lossless";
let fill = "https://cdn.discordapp.com/emojis/931967080595587102.gif?size=96&quality=lossless";
let fillend = "https://cdn.discordapp.com/emojis/931967080486559776.gif?size=96&quality=lossless";
let fillstart = "https://cdn.discordapp.com/emojis/931967080654307358.gif?size=96&quality=lossless";
  
  message.guild.emojis.create(man, "man").then(emoji => message.channel.send(`Başarıyla ${emoji.name} adında emoji oluşturuldu. (${emoji})`)).catch(console.error);
  message.guild.emojis.create(girl, "girl").then(emoji => message.channel.send(`Başarıyla ${emoji.name} adında emoji oluşturuldu. (${emoji})`)).catch(console.error);
  message.guild.emojis.create(warn, "warn").then(emoji => message.channel.send(`Başarıyla ${emoji.name} adında emoji oluşturuldu. (${emoji})`)).catch(console.error);
  message.guild.emojis.create(deaktif, "deaktif").then(emoji => message.channel.send(`Başarıyla ${emoji.name} adında emoji oluşturuldu. (${emoji})`)).catch(console.error);
  message.guild.emojis.create(aktif, "aktif").then(emoji => message.channel.send(`Başarıyla ${emoji.name} adında emoji oluşturuldu. (${emoji})`)).catch(console.error);
  message.guild.emojis.create(hg1, "hg1").then(emoji => message.channel.send(`Başarıyla ${emoji.name} adında emoji oluşturuldu. (${emoji})`)).catch(console.error);
  message.guild.emojis.create(hg2, "hg2").then(emoji => message.channel.send(`Başarıyla ${emoji.name} adında emoji oluşturuldu. (${emoji})`)).catch(console.error);
  message.guild.emojis.create(hg3, "hg3").then(emoji => message.channel.send(`Başarıyla ${emoji.name} adında emoji oluşturuldu. (${emoji})`)).catch(console.error);
  message.guild.emojis.create(hg4, "hg4").then(emoji => message.channel.send(`Başarıyla ${emoji.name} adında emoji oluşturuldu. (${emoji})`)).catch(console.error);
  message.guild.emojis.create(hg5, "hg5").then(emoji => message.channel.send(`Başarıyla ${emoji.name} adında emoji oluşturuldu. (${emoji})`)).catch(console.error);
  message.guild.emojis.create(hg6, "hg6").then(emoji => message.channel.send(`Başarıyla ${emoji.name} adında emoji oluşturuldu. (${emoji})`)).catch(console.error);
  message.guild.emojis.create(hg7, "hg7").then(emoji => message.channel.send(`Başarıyla ${emoji.name} adında emoji oluşturuldu. (${emoji})`)).catch(console.error);
  message.guild.emojis.create(sifir, "sifir").then(emoji => message.channel.send(`Başarıyla ${emoji.name} adında emoji oluşturuldu. (${emoji})`)).catch(console.error);
  message.guild.emojis.create(bir, "bir").then(emoji => message.channel.send(`Başarıyla ${emoji.name} adında emoji oluşturuldu. (${emoji})`)).catch(console.error);
  message.guild.emojis.create(iki, "iki").then(emoji => message.channel.send(`Başarıyla ${emoji.name} adında emoji oluşturuldu. (${emoji})`)).catch(console.error);
  message.guild.emojis.create(uc, "uc").then(emoji => message.channel.send(`Başarıyla ${emoji.name} adında emoji oluşturuldu. (${emoji})`)).catch(console.error);
  message.guild.emojis.create(dort, "dort").then(emoji => message.channel.send(`Başarıyla ${emoji.name} adında emoji oluşturuldu. (${emoji})`)).catch(console.error);
  message.guild.emojis.create(bes, "bes").then(emoji => message.channel.send(`Başarıyla ${emoji.name} adında emoji oluşturuldu. (${emoji})`)).catch(console.error);
  message.guild.emojis.create(alti, "alti").then(emoji => message.channel.send(`Başarıyla ${emoji.name} adında emoji oluşturuldu. (${emoji})`)).catch(console.error);
  message.guild.emojis.create(yedi, "yedi").then(emoji => message.channel.send(`Başarıyla ${emoji.name} adında emoji oluşturuldu. (${emoji})`)).catch(console.error);
  message.guild.emojis.create(sekiz, "sekiz").then(emoji => message.channel.send(`Başarıyla ${emoji.name} adında emoji oluşturuldu. (${emoji})`)).catch(console.error);
  message.guild.emojis.create(dokuz, "dokuz").then(emoji => message.channel.send(`Başarıyla ${emoji.name} adında emoji oluşturuldu. (${emoji})`)).catch(console.error);
  message.guild.emojis.create(empty, "empty").then(emoji => message.channel.send(`Başarıyla ${emoji.name} adında emoji oluşturuldu. (${emoji})`)).catch(console.error);
  message.guild.emojis.create(emptyend, "emptyend").then(emoji => message.channel.send(`Başarıyla ${emoji.name} adında emoji oluşturuldu. (${emoji})`)).catch(console.error);
  message.guild.emojis.create(fill, "fill").then(emoji => message.channel.send(`Başarıyla ${emoji.name} adında emoji oluşturuldu. (${emoji})`)).catch(console.error);
  message.guild.emojis.create(fillend, "fillend").then(emoji => message.channel.send(`Başarıyla ${emoji.name} adında emoji oluşturuldu. (${emoji})`)).catch(console.error);
  message.guild.emojis.create(fillstart, "fillstart").then(emoji => message.channel.send(`Başarıyla ${emoji.name} adında emoji oluşturuldu. (${emoji})`)).catch(console.error);

}
exports.conf = {
  command: "emojileriyükle",
  description: "",
  aliases: []
}