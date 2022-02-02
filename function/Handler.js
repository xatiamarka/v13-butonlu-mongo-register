const fs = require('fs');
const path = require("path");



class Handler {
    GetCommands(client) {
        let commandsPath = path.join(global.__baseDir,"commands")
        fs.readdirSync(commandsPath).filter(file => file.endsWith(".js")).forEach(file => {
            let command = require(`${commandsPath}/${file}`);
            client.commands.set(command.conf.command, command);
            console.log('\x1b[32m',`[Komutlar] ${file.replace(".js", "")} Komutlar Yüklendi.`);
            command.conf.aliases.forEach(aliases => {
                client.aliases.set(aliases, command)  
            });
        });
      }
       GetEvents(client) {
        let eventsPath = path.join(global.__baseDir,"events")
        fs.readdirSync(eventsPath).filter(file => file.endsWith(".js")).forEach(file => {
            let event = require(`${eventsPath}/${file}`);
            client.on(event.conf.event, event.execute);
            console.log('\x1b[36m',`[Eventler] ${file.replace(".js", "")} Eventler Yüklendi.`);
        });
      }
}

module.exports = Handler