global.__baseDir = __dirname
const main = require("./function/login")
const client = main.getClient()
const moment = require("moment")
const { Collection } = require("discord.js");
const Handle = require('./function/Handler.js')
const { token, url } = require("./settings.json")
const wm = new Map();

client.channelLimit = new Map();
client.commands = new Collection();
client.aliases = new Collection();

let chaos = new Handle()
chaos.GetEvents(client)
chaos.GetCommands(client)
main.botLogin(token)
main.connectMongo(url);

client.createBar =  async (current, required, total) => {
    let percentage = (100 * current) / required;
    percentage = percentage > 100 ? 100 : percentage;
    const Fill = `${client.emojis.cache.find(chaos => chaos.name === "fill")}`;
    const Empty = `${client.emojis.cache.find(chaos => chaos.name === "empty")}`;
    let str = "";
    const progress = Math.round((percentage / 100) * total);
    str += percentage > 0 ? `${client.emojis.cache.find(chaos => chaos.name === "fillstart")}` : `${client.emojis.cache.find(chaos => chaos.name === "empty")}`;
    str += Fill.repeat(progress);
    str += Empty.repeat(8 - progress);
    str += percentage === 100 ? `${client.emojis.cache.find(chaos => chaos.name === "fillend")}` : `${client.emojis.cache.find(chaos => chaos.name === "emptyend")}` ;
    return str; 
    }

