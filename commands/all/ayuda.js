module.exports = {
    name: "ayuda",
    description: "muestra los comandos disponibles a los usuarios comunes",
    aliases: ["help"],

    async execute(client, message, args, discord) {


        const elpepe = new discord.MessageEmbed()
        .setTitle("ℹ | Panel de comandos")
        .setColor("BLUE")
        .setDescription("> Lista de comandos disponibles:\n\n```?ayuda\n?discord\n\n```\n")
        .setFooter(`Solicitado por ${message.user.username}`)

        message.reply({embeds:[elpepe]})
} 
}