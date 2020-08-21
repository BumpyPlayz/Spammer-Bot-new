exports.run = async (client, message, args) => {
    var done = false
    if (args[0]) {
        if (args[1]){
            var times = parseInt(args[0]);
            if(times){
                if(times > 0){
                    if (times <= 100){
                        var alltoprint = args.shift();
                        var newmsg = "";
                        args.forEach(element => {
                            newmsg = newmsg.concat(element.concat(" "));
                        });
                        for (let step = 0; step < times; step++) {
                            message.channel.send(newmsg);
                            
                        };
                        done = true;
                    }
                    else{
                      message.reply("Can't spam more than 100 times");
                      done = true;
                    };
                    
                }
                else{
                    message.channel.send("Cannot spam less than 1 times");
                    done = true;
                };
            };
        }
        else{
            message.reply('Please specify a message to spam');
            done = true;
        };
    };
    if (done == false){
        message.channel.send('There you go!');
    };
};

exports.config = {

    command: 'spam',
    usage: 'use to spam channels',
    desc: 'Spammer',
    aliases: []

};