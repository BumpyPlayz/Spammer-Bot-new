const Discord = require('discord.js');

const client = new Discord.Client();
const fs = require('fs')
const { log } = require('./util/log');
const prefix = ','
client.commands =  new Discord.Collection();
client.aliases = new Discord.Collection();
client.levels = new Discord.Collection();

fs.readdir('./commands/', (err, files) => {
    if(err) throw err;
    log(`loading ${files.length} commands`)
    files.forEach(command => {
        log(`   loading ${command}`)
        let commandData = require(`./commands/${command}`)
        client.commands.set(commandData.config.command.toLowerCase(), commandData);
        commandData.config.aliases.forEach(alias => {
            client.aliases.set(alias.toLowerCase(), commandData);
        });
    });
    log('Done!')
});

fs.readdir('./levels/', (err, files) => {
    if(err) throw err;
    log(`loading ${files.length} commands`)
    files.forEach(command => {
        log(`   loading ${command}`);
    });
    log('Done!');
});

client.once('ready', async () => {    
    log(`Bot is Ready as ${client.user.username}`);
    log(`Bot is logged into ${client.guilds.cache.size} server`);
    
});

client.on('ready', async () => {
    await client.user.setPresence({ activity: { name: 'Just Chilling 😁', type: "WATCHING"  }, status: 'idle' });
    //PLAYING: WATCHING: LISTENING: STREAMING:
 });

client.on('message', async message => {
   
    if(message.channel.type !== "text") return;
    if(message.channel.bot) return;
    if(!message.content.startsWith(prefix)) return;
    


        let args = message.content.split(' ');
        let command = args.shift()
        command = command.slice(prefix.length).toLowerCase();

        let commandObj = client.commands.get(command) || client.aliases.get(command);

        if(commandObj){
            if(message.channel.id == 730699265944453200 || message.channel.id == 734647499473682432 ){
                message.delete().catch(() => {});
                commandObj.run(client, message, args) ;
            }
            else{
                message.delete().catch(() => {});
                message.reply("Please use the commands in the correct channel <#734647499473682432>");
            };
        };

});

client.on('message', async message => {
    if (message.member.id == '159985870458322944'){
        if (!message.content.startsWith("GG")) return;

        let args = message.content.split(' ');

        let lvl = args[7].split('!')
        log(lvl[0])
        fs.readdir('./levels/', (err, files) => {
            if(err) throw err;
            files.forEach(command => {
                let levelmodule = require(`./levels/${command}`);
                levelmodule.run(client, message, lvl[0]);
            });
        });
        
    };
});


client.login(process.env.Token);