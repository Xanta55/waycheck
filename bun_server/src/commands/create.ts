import { CommandInteraction, Client, Options, SlashCommandStringOption, ApplicationCommandOptionBase, ApplicationCommandOptionType, ApplicationCommandType } from "discord.js";
import { type Command } from "../Command";
import { getAllEntries } from "../pb_crud";
import { EXISTS, createNewCharacter, isCharacterExist } from "../db_ops/createCharacter";

export const CreateCall: Command = {
    name: "create",
    description: "Create a new Waychecker",
    options: [
        {
            name: 'name',
            type: ApplicationCommandOptionType.String,
            description: 'What should your Waychecker be called?',
            required: true
        }
    ],
    run: async (client: Client, interaction: CommandInteraction) => {
        try {
            let doesExist = await isCharacterExist(interaction.member?.user.id ?? '', interaction.guildId ?? '');
            switch (doesExist) {
                case EXISTS.NONE: {
                    let wcName: string = interaction.options.get('name')!.value!.toString();
                    let wcGuild: string = interaction.guildId!;
                    createNewCharacter(interaction.member?.user.id!, wcName, wcGuild);
                    const content = 'Seems like this little Waychecker over there wants to be ' + wcName + '!';
                    await interaction.followUp({
                        ephemeral: true,
                        content
                    });
                    break;
                }
                case EXISTS.PRESENT: {
                    const content = 'Hey, your Waychecker already exists on here!\nOnly one Waychecker per person in every realm allowed, dont you know that?';
                    await interaction.followUp({
                        ephemeral: true,
                        content
                    });
                    break;
                }
                case EXISTS.ELSEWHERE: {
                    const content = 'Seems like you have a Waychecker in another dimension right now.\nWe can get him later on! (TBD)';
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