import { Client, GatewayIntentBits, Events, Collection, REST, Routes } from "discord.js";
import PocketBase, { ClientResponseError } from "pocketbase";
import ready from "./listeners/ready";
import interactionsCreate from "./listeners/interactionCreate";
import { createEntryModel } from "./pb_crud";
import type { Inventory } from "./models/wc_inventory";

export const pb = new PocketBase("http://172.5.0.3:8008");
console.log("Connected to PocketBase!");

const token = Bun.env.TOKEN; // add your token here
const rest = new REST().setToken(token!);

console.log("Bot is starting...");

const client = new Client({
    intents: [],
});

client.login(token);

/*
// delete global commands
rest.put(Routes.applicationCommands(Bun.env.CLIENT_ID!), { body: [] })
	.then(() => console.log('Successfully deleted all application commands.'))
	.catch(console.error);
*/

ready(client);
interactionsCreate(client);
