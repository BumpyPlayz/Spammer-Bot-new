  
    //PLAYING: WATCHING: LISTENING: STREAMING:
 exports.run = async (client, message, args) => {
    if(message.member.id == '548547068747055104'){
        var alltoprint = args.shift();
                        var newmsg = "";
                        args.forEach(element => {
                            newmsg = newmsg.concat(element.concat(" "));
                        });
     await client.user.setPresence({ activity: { name: newmsg, type: "WATCHING" }, status: args[0] });
    };
};

exports.config = {

    command: 'setplaying',
    usage: 'pong',
    desc: 'ping',
    aliases: []

};