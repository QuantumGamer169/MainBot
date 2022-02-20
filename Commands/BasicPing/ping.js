const { CommandInteraction } = require("discord.js")

module.exports = {
  name: "ping",
  description: "Ping",
  permission: "ADMINISTRATOR",
  /**
   * @param {CommandINteraction} interaction
   */
  execute(interaction) {
    interaction.reply({content: "Pong"})
  }
}