import { CommandInteraction, Client, Options, SlashCommandStringOption, ApplicationCommandOptionBase, ApplicationCommandOptionType, ApplicationCommandType } from "discord.js";
import { type Command } from "../Command";
import { getAllEntries } from "../pb_crud";

export const PocketBased: Command = {
    name: "db",
    description: "Perform a CRUD",
    options: [
        {
            name: 'table',
            type: ApplicationCommandOptionType.String,
            description: 'Look this table up!',
            required: true
        }
    ],
    run: async (client: Client, interaction: CommandInteraction) => {
        let table: string = interaction.options.get('table')?.value?.toString() ?? '';
        try {
            if(table != ''){
                let response = await getAllEntries(table);

                let rs: string = response.map((e) => e.Ough).join(', ');
        
                const content = "Hello there, dear " + interaction.member?.user.id + "!\nThis stuff was in your table:\n"+rs;
        
                await interaction.followUp({
                    ephemeral: true,
                    content
                });
            } else {
                const content = "Something went wrong on our end, sorry :((";
                
                await interaction.followUp({
                    ephemeral: true,
                    content
                });
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