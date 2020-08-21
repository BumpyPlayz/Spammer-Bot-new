exports.run = async (client, message, args) => {
    var done = false
    if (args[0]) {
        var times = parseInt(args[0]);
        if(times){
            if(times > 0){
                if (times <= 100){
                    if (args[1]) {
                        var alltoprint = args.shift();
                        var newmsg = "";
                        args.forEach(element => {
                            newmsg = newmsg.concat(element.concat(" "));
                        });
                        for (let step = 0; step < times; step++) {
                            message.reply(newmsg);
                        };
                    }
                    else{
                        for (let step = 0; step < times; step++) {
                            message.reply("There you go!");
                        };
                    }
                    done = true;
                   
                }
                else{
                  message.reply("Can't ping more than 100 times");
                  done = true;
                };
            }
            else{
                message.channel.send("Cannot ping less than 1 times");
                done = true;
            };
        };
    }
    if (done == false){
        message.reply('There you go!');
    }
    
};

exports.config = {

    command: 'ping',
    usage: 'pings you',
    desc: 'pinger',
    aliases: []

};