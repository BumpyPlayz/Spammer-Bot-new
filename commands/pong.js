exports.run = async (client, message, args) => {
    const m = await message.channel.send("Ping?");
    m.edit(`Pong! ✌
Latency is ${m.createdTimestamp - message.createdTimestamp}ms. 😁
API Latency is ${Math.round(client.ping)}ms 👀`);
};

exports.config = {

    command: 'pong',
    usage: 'pong',
    desc: 'ping',
    aliases: []

};