import type { Client, CommandInteraction } from "discord.js";
import type { Command } from "../Command";
import { EXISTS, isCharacterExist } from "../db_ops/wcc_create";

export const ActionsCall: Command = {
    name: "actions",
    description: "Choose, what action your Waychecker should perform",
    run: async (client: Client, interaction: CommandInteraction) => {
        try {
            let doesExist = await isCharacterExist(interaction.member?.user.id ?? '', interaction.guildId ?? '');
            switch (doesExist) {
                case EXISTS.PRESENT: {
                    const content = "Your Waychecker is currently ";
                    
                    await interaction.followUp({
                        ephemeral: true,
                        content
                    });
                    break;
                }
                case EXISTS.ERROR: {
                    const content = "Seems like these pesky little Waycheckers are currently going wild!\n(Something went wrong, maybe try again later?)";
                    
                    await interaction.followUp({
                        ephemeral: true,
                        content
                    });
                    break;
                }
                case EXISTS.NONE: {
                    const content = "You need to create a Waychecker first!";
                    await interaction.followUp({
                        ephemeral: true,
                        content
                    });
                    break;
                }
                case EXISTS.ELSEWHERE: {
                    const content = "Your Waychecker wont hear you from here!";
                    await interaction.followUp({
                        ephemeral: true,
                        content
                    });
                    break;
                }
            }
        } catch (e) {
            const content = "Whoopsie Daisy! :3c";
            console.error(e);
            console.log('Whoopsie Daisy! :3c');
            await interaction.followUp({
                ephemeral: true,
                content
            });
        }
    }
};