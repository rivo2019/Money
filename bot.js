﻿const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("543209806039744542")
setInterval(function() {
channel.send(`kawaii`);
}, 1)
})

client.login(process.env.BOT_TOKEN);
