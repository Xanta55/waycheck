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

/*
pb.collection('tester').getFullList().then((result) => {
    console.log(result);
}).catch((error: ClientResponseError) => {
    console.log('Oh no!');
    console.error(error.originalError);
});
*/

ready(client);
interactionsCreate(client);


/*
Bun.serve({
    port: 8081,
    fetch(req) {
        let printer: String = ''
        let outArr: Array<String> = []
        pb.collection('tester').getFullList().then((result) => {
            // success...
            console.log('Result:', result.toString());
            printer.concat(String(result));
        }).catch((error: ClientResponseError) => {
            // Make the Error cool
            printer.concat('<div> ==Error== </div><table>');
            outArr.push('Name: ' + error.name);
            outArr.push('Response: ' + error.response);
            outArr.push('URL: ' + error.url);
            outArr.push('Status: ' + error.status);
            outArr.push('isAbort?: ' + error.isAbort);
            outArr.push('Original Error?: ' + error.originalError);
            outArr.push('isAbort?: ' + error.isAbort);
            outArr.push('Cause: ' + error.cause ?? 'I dont know m8');
            outArr.push('Data: ' + error.data);
            outArr.push('Stack: ' + error.stack ?? 'Is gone m8');

            // Log this
            console.log('==Error==')
            outArr.forEach((e) => console.log(e));

            // Prepare string
            printer.concat('<tr>', outArr.join('</tr>\n<tr>') ,'</tr>')
            printer.concat('</table>')
        });
        return new Response("You got this: "+printer);
    },
});


*/