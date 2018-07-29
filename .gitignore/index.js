const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('ready', function() {
    bot.user.setActivity("V 1.0");
    console.log("Connecté pour RoleSelector"); 
});

bot.login(process.env.TOKEN);

bot.on('message', async message => {
    
    if(message.content === '!panelrole') {
        if(message.guild.channels.id === '473067588314988544' || message.guild.channels.id === '461666810656456716') return message.delete();
        var embed = new Discord.RichEmbed()
        .setTitle('RoleSelector, prenez le rôle souhaité disponible !')
        .setDescription(':pick:️ : Fortnite\n:medal: : Overwatch\n:bow_and_arrow: : Minecraft\n:x: : Retire les rôles proposé ici sur vous')    
         
        const reactmessage = await message.channel.send(embed);    
        await reactmessage.react("⛏");
        await reactmessage.react("🏅");
        await reactmessage.react("🏹");
        await reactmessage.react("❌");

        const filter1 = (reaction, user) => reaction.emoji.name === '⛏' && !user.bot; 
        const collector1 = reactmessage.createReactionCollector(filter1);
        
        const filter2 = (reaction, user) => reaction.emoji.name === '🏅' && !user.bot; 
        const collector2 = reactmessage.createReactionCollector(filter2);

        const filter3 = (reaction, user) => reaction.emoji.name === '🏹' && !user.bot; 
        const collector3 = reactmessage.createReactionCollector(filter3); 

        const filter4 = (reaction, user) => reaction.emoji.name === '❌' && !user.bot; 
        const collector4 = reactmessage.createReactionCollector(filter4); 

        collector1.on('collect', async reaction => { 
            const user = reaction.users.last();
            const guild = reaction.message.guild;
            const member = guild.member(user) || await guild.fetchMember(user);
            member.addRole("468691051205623808");
            console.log(`Added the role Fortnite to ${member.displayName}`);
    });
        collector2.on('collect', async reaction => { 
            const user = reaction.users.last(); 
            const guild = reaction.message.guild; 
            const member = guild.member(user) || await guild.fetchMember(user); 
            member.addRole("468690966837198858");
            console.log(`Added the role Overwatch to ${member.displayName}`);
    });
        collector3.on('collect', async reaction => { 
            const user = reaction.users.last(); 
            const guild = reaction.message.guild;
            const member = guild.member(user) || await guild.fetchMember(user); 
            member.addRole("468691009015119893"); 
            console.log(`Added the role Minecraft to ${member.displayName}`);
    });
        collector4.on('collect', async reaction => { 
            const user = reaction.users.last(); 
            const guild = reaction.message.guild; 
            const member = guild.member(user) || await guild.fetchMember(user); 
            member.removeRole("468691051205623808"); 
            member.removeRole("468690966837198858");
            member.removeRole("468691009015119893");
            console.log(`Remove all roles to ${member.displayName}`);
    });

        
    }
})
