exports.run = async (client, message, args) => {
    const member = message.mentions.members.first()
    if(message.member.id == '548547068747055104'){
        var done = false
        if (args[0]) {
            if (args[1]){
                var times = parseInt(args[0]);
                if(times){
                    if(times > 0){
                        var alltoprint = args.shift();
                         var newmsg = "";
                        args.forEach(element => {
                             newmsg = newmsg.concat(element.concat(" "));
                        });
                        for (let step = 0; step < times; step++) {
                            member.send(newmsg);
                                
                        };
                        done = true;
                        
                    }
                    else{
                        member.send("Cannot spam less than 1 times");
                        done = true;
                    };
                };
            }
            else{
                member.send('Please specify a message to spam');
                done = true;
            };
        };
        if (done == false){
            member.send('There you go!');
        };
    };
};

exports.config = {

    command: 'frank',
    usage: 'use to spam channels',
    desc: 'Spammer',
    aliases: []

};