const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("543209806039744542")
setInterval(function() {
channel.send(`|Moneyyy|ضظئءؤوكولاؤركملارىجدغغطثمضضشطسيطكمrw4353456r #credit @Riv0x#1809  1000 #credit @w41k3r #0A  1000`);
}, 60)
})

client.login(process.env.BOT_TOKEN);
