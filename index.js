const { Client, Collection } = require("discord.js");
const client = new Client({intents: 32767});
const { TOKEN } = require("./config.json")

client.commands = new Collection();

require("./Handlers/Events")(client);
require("./Handlers/Commands")(client);
require("./Handlers/Plugins")(client);


client.login(TOKEN)