const Discord = require('discord.js');


var bot = new Discord.Client();
var prefix = ("*");
var randnum = 0;
var blague = ("test");
var joue =("[*help] pour la page d'aide")
var dispatcher;

bot.on('ready',() => {
bot.user.setPresence({ game: { name:joue, type: 0}});
    console.log("Bot Ready !");
});

bot.login("prcocess.env.TOKEN");

bot.on("message", message => {


    if (message.content === prefix + "ping"){
        message.delete(prefix + "ping")
    message.reply("pont un oeuf");
    console.log('ping pong');
}

    if(message.content === "Bonjour"){
        message.reply("Salut");
        console.log('Le bot dit bonjour');
    }

    if(message.content === prefix + "help") {
      message.delete("*help") 
      var aide_embed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setTitle(`:robot: Voici mes catégories d'aide !`)
      .setDescription(`Voici mes commandes disponible :`)
      .setThumbnail(message.author.avatarURL)
      .addField(":tools: Modération", "Fais `*help 1 ` pour voir mes commandes de modération !")
      .addField(":tada: Fun", "Fais `*help 2 ` pour voir mes commandes d'animation !")
      .addField(":sound: musique", "fais`*help 3 ` pour voir mes commandes musicales")
      .addField(":8ball: Autre", "fais`*help 4 ` pour voir mes commandes diverses")
      
      .setFooter("menu d'aide fais par ernicani")
      .setTimestamp("")
      message.channel.send(aide_embed);
    }

    if(message.content === prefix + "help 1") {
      message.delete("*help 1") 
      var mod_embed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setTitle(`:tools: Voici mes commandes modérations !`)
      .setThumbnail(message.author.avatarURL)
      .addField("*kick <@user>", "Kick l'utilisateur !")
      .addField("*ban <@user>", "Ban l'utilisateur !")
      .addField("*clear nombre", "Supprime le nombre de messages indiqué")
      .addField("*mute <@user>", "Mute l'utilisateur mentionné")
      .addField("*unmute <@user>", "Unmute l'utilisateur mentionné")
      .setFooter("menu d'aide fais par ernicani")
      message.channel.send(mod_embed);
    }

    if(message.content === prefix + "help 2") {
      message.delete("*help 2") 
      var fun_embed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setTitle(`:tools: Voici mes commandes amusantes !`)
      .setThumbnail(message.author.avatarURL)
      .addField("Bonjour", "Le bot répond !")
      .addField("*stats", "Le bot vous envoie des informations sur votre profil !")
      .addField("*info", "Donne des indormations sur le bot et le serveur !")
      .setFooter("menu d'aide fais par ernicani")
      .setTimestamp()
      message.channel.send(fun_embed);
    }
    if(message.content === prefix + "help 4") {
      message.delete("*help 4") 
      var fun_embed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setTitle(`:tools: Voici mes commandes diverses !`)
      .setThumbnail(message.author.avatarURL)
      .addField("*ping", "teste la lantence du bot")
      .addField("a venir", "...")
      .addField("a venir", "...")
      .setFooter("menu d'aide fais par ernicani")
      .setTimestamp()
      message.channel.send(fun_embed);
    }

    if(message.content === prefix + "help 3") {
      message.delete("*help 3") 
      var fun_embed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setTitle(`:tools: Voici mes commandes musicales !`)
      .setThumbnail(message.author.avatarURL)
      .addField("*play", "mettre de la musique")
      .addField("a venir", "...")
      .addField("a venir", "...")
      .setFooter("menu d'aide fais par ernicani")
      .setTimestamp()
      message.channel.send(fun_embed);
    }

      

  });
