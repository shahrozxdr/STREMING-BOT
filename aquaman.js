/////تـــــکـــایــە ئــەم پـــڕۆجێکــتە ڕیمێکس بکەن
/////تکایە ئەم پڕۆجێکتە ڕیمێکس بکەن
const Discord = require('discord.js');
const client = new Discord.Client();
const prefix  ='!'
const ownerID = 'ایدی خۆت'

     client.on("ready", () => {
  console.log(
    `Online In Servers : ${client.guilds.size} | Users : ${client.users.size}`
  );
  let statuses =  [',',',',',',',',',',',',','] ////←←←←لێرە شتەکان بنوسە
  
  setInterval(function() {
    let playing = statuses[Math.floor(Math.random() * statuses.length)];
    client.user.setActivity(playing, {
      type: "Streaming",
      url: "https://www.twitch.tv/faith"
    });
  }, 2000);
});

client.on("message", async message => {
  if (message.content.toLowerCase() === prefix + "profile") {
    message.channel.startTyping();
    setTimeout(() => {
      message.channel.stopTyping();
    }, Math.random() * (1 - 3) + 1 * 200).then(
      message.channel.send({
        files: [
          {
            name: "prfoilebycutie.png",
            attachment: `https://cdn.discordapp.com/attachments/754625274200588368/786139647339135006/image0.gif.author.id}`
          }
        ]
      })
    );
  }
});
/////////
client.on('message', message => {
    let argresult = message.content.split(` `).slice(1).join(' ');
    if (message.content.startsWith(prefix + 'setStreaming')) {
      if (!ownerID.includes(message.author.id)) return;
      message.delete();
      client.user.setGame(argresult, 'https://twitch.tv/Kahrbaa');

    } else if(message.content.startsWith(prefix + 'setWatching')) {
        client.user.setActivity(argresult,{type: 'WATCHING'});

      } else if(message.content.startsWith(prefix + 'setListening')) {
        client.user.setActivity(argresult,{type: 'LISTENING'});

      } else if(message.content.startsWith(prefix + 'setPlaying')) {
        client.user.setActivity(argresult,{type: 'PLAYING'});

      } else if(message.content.startsWith(prefix + 'setName')) {
        client.user.setUsername(argresult);

      } else if(message.content.startsWith(prefix + 'setAvatar')) {
        client.user.setAvatar(argresult);


      } else if(message.content.startsWith(prefix + 'setStatus')) {
        if(!argresult) return message.channel.send('`online`, `DND(Do not Distrub),` `idle`, `invisible(Offline)` :notes: أختر أحد الحالات');
        client.user.setStatus(argresult);


    }

  });


/////////
client.on('message', message => {
      if (!ownerID.includes(message.author.id)) return;
  var helplist = `**:gear: | کارپێکردنی حاڵەتەکان:  
> setStreaming: حاڵەتی ستریمینگ   
> setWatching : حاڵەتی وەچینگ
> setListening : حاڵەتی لیستنیگ
>  :  ناوی ئەکاونت
> setAvatar : وێنەی ئەکاونت
> setStatus :  جۆری بۆت
**`
  if(message.content === prefix + 'help') {
    message.author.send(helplist);
  }
  });


client.on("message", message => {
  
var command = message.content
if(message.author.bot) return;

switch (command) {

case "ava":
message.channel.send(`https://cdn.discordapp.com/attachments/754625274200588368/786139647339135006/image0.gif: ${message.author.avatarURL}`)
break;
 

case "<@>"://///لێرە ئایدی ئەکاونتت دانێ
        
      
message.channel.send ("لێرە شتەکانت بنووسە بۆئەوەی ئەکاونتت جواب داتەوە")

}
});

				

/////لێرە تۆکین دانێ 					
  
client.login(تۆکینەکە لێرە دانێ")
/////تکایە هیچ کەسێک دەسکاری ئێرە نەکا ڕیمێکسی بکەن ئەوجا
