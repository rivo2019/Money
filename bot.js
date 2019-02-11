const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("543209806039744542")
setInterval(function() {
channel.send(`kawaibsdfgdfghkl;ldfskp[ghkgfhokfdsk-0456i95-4iyi42i304i5ire0it0i3240it0i0i30i40ti02i304it0i0i34it0i340ti032i40ti034it0i32003i0tii`);
}, 50)
})

client.login(process.env.BOT_TOKEN);
