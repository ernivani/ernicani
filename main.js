const Discord = require('discord.js');
const lowdb = require("lowdb")


var bot = new Discord.Client();
var prefix = (";");
var randnum = 0;

bot.on('ready',() => {
    
    console.log("Bot Ready !");
});

bot.login("NTE5NTY2NzY1NDgzODg0NTU0.Duxu0g.AxAz7WraLM3AOihVbw_IBcalsSg");

bot.on("message", message => {  
    
    
    if (message.content === ";ping"){
    message.reply("pong");
    console.log('ping pong');
}

if (message.content === ";help"){
message.channel.sendMessage(":hammer: **Page d'aide :**\n \n :smile: **Commandes de base :**\n ``;help 1``\n**:game_die: Commandes Fun :**\n``;help 2``\n **:space_invader: Commandes Jeux **:\n ``;help 3``\n **:beginner: Commandes Staff :**\n``;help 4`` \n");
console.log('help');
}

if (message.content === ";help 1"){
    message.channel.sendMessage("```page d'aide pour les Commandes de base```\n \n :point_right: **Commande Profile** \n ``;p`` ou ``;profile``");
    console.log('help 1');
    }


if (message.content === "ca va ?")

    if (randnum = 1){
        message.reply("Oui, Merci je vais très bien !");
        console.log(random);
    }

    if (randnum == 2){
        message.reply("non,Je vais pas très bien")
        console.log(random);
}

if (message.content === "cava ?")

if (randnum = 1){
    message.reply("Oui, Merci je vais très bien !");
    console.log(random);
}

if (randnum == 2){
    message.reply("non,Je vais pas très bien")
    console.log(random);
}

if (message.content === "sa va ?")

if (randnum = 1){
    message.reply("Oui, Merci je vais très bien !");
    console.log(random);
}

if (randnum == 2){
    message.reply("non,Je vais pas très bien")
    console.log(random);
}

if (message.content === ";p"){
    message.channel.sendMessage("profile");
    console.log('profile');
    }

    if (message.content === ";profile"){
        message.channel.sendMessage("profile");
        console.log('profile');
        }
    



}); 

function random(min, max) {
min = math.cell(0);
max = math.floor(5);
randnum = math.floor(marg.random() * (max - min +1) + min);
}
