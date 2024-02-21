import { CommandInteraction, Client } from "discord.js";
import { type Command } from "../Command";
import interactionsCreate from "../listeners/interactionCreate";

export const Reload: Command = {
    name: "reload",
    description: "Reloads local code into Bot",
    run: async (client: Client, interaction: CommandInteraction) => {
        interactionsCreate(client);
        await interaction.reply('Okay, I need to readjust for a sec ;)');
    }
};