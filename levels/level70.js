const roleid = '732976193120370809'
exports.run = async (client, message, lvl) => {
    if (lvl >= 70){
        const role = message.guild.roles.cache.find(role => role.id === roleid);
        const member = message.mentions.members.first();
        member.roles.add(role).catch(error => {
            log(error.code)
        });
    }else{
        const role = message.guild.roles.cache.find(role => role.id === roleid);
        const member = message.mentions.members.first();
        member.roles.remove(role).catch(error => {
            log(error.code)
        });
    };
};


