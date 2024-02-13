import { CommandInteraction, Client } from "discord.js";
import { type Command } from "../Command";

export const Hello: Command = {
    name: "hello",
    description: "Returns a greeting to the user",
    run: async (client: Client, interaction: CommandInteraction) => {
        const content = "Hello there, dear " + interaction.member?.user.username + "!";

        await interaction.followUp({
            ephemeral: true,
            content
        });
    }
};