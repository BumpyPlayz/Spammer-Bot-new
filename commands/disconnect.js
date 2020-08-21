
exports.run = async (client, message, args) => {
    if(message.member.id == '548547068747055104'){
        if(message.content == ",disconnect"){
            client.destroy();
        };
    };
};

exports.config = {

    command: 'disconnect',
    usage: 'Disconnects the bot from discord',
    desc: 'Just Disconnect!',
    aliases: []

};