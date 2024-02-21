import { Client, GatewayIntentBits, Events, Collection, REST, Routes } from 'discord.js';
import PocketBase, { ClientResponseError } from 'pocketbase';
import ready from "./listeners/ready";
import interactionsCreate from "./listeners/interactionCreate";

export const pb = new PocketBase('http://172.5.0.3:8008');
console.log('Connected to PocketBase!');

const token = Bun.env.TOKEN; // add your token here

console.log("Bot is starting...");

const client = new Client({
    intents: []
});

client.login(token);

ready(client);
interactionsCreate(client);