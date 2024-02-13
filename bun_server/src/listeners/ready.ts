import { Client } from "discord.js";
import { Commands } from "../all_commands";

export default (client: Client): void => {
    client.on("ready", async () => {
        if (!client.user || !client.application) {
            return;
        }

        await client.application.commands.set(Commands);

        // Commands.forEach((e)=>console.log(e));

        console.log(`${client.user.username} is online`);
    });
};