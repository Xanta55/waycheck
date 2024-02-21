import { ClientResponseError, type RecordModel } from "pocketbase";
import "../pb_crud";
import { createEntry, getAllEntriesWhere, getEntryWhere } from "../pb_crud";

export enum EXISTS {
    PRESENT,
    ELSEWHERE,
    NONE,
    ERROR,
}

/**
 * Will create a new blank Character with the given values in the database
 * @param userID Should be the unique user id (most often its interaction.member?.user.id)
 * @param nameIn The name to give to the character (Idk if this will have a use soon)
 * @param serverIn The unique serverID, to later on check, if a Waychecker already exists
 */
export async function createNewCharacter(userID: string, nameIn: string, serverIn: string) {
    try {
        let inventoryRM = await createEntry("inventories", {
            items: {},
        });

        createEntry("waycheckers", {
            discordID: userID,
            serverID: serverIn,
            name: nameIn,
            inventory: inventoryRM.id,
            stats: {
                level_walk: 0,
                level_fish: 0,
                waychecks: 0,
                distance: 0.0,
            },
            activity: "idle",
        });

        console.log('Created new Character with name "' + nameIn + '"');
    } catch (errorCharacter) {
        console.log("|| Got error on creating new Waychecker!");
        console.error(errorCharacter);
    }
}

export async function isCharacterExist(userID: string, serverMatch: string): Promise<EXISTS> {
    if (userID.length == 0 || serverMatch.length == 0) {
        console.error("ERROR: Got empty ID or guildID; will not check!");
        return EXISTS.ERROR; // Something wrong with input?
    }
    try {
        let result: RecordModel[] = await getAllEntriesWhere('waycheckers', 'discordID = "' + userID + '"');
        let existsOnHere = result.filter((rm) => rm.serverID === serverMatch).length != 0;
        return existsOnHere ? EXISTS.PRESENT : EXISTS.ELSEWHERE;
    } catch (error) {
        if (error instanceof ClientResponseError) {
            // PocketBase throws ClientResponseError if none found
            // none found? Can create one! ;)
            return EXISTS.NONE;
        } else {
            console.log("|| Got error while checking if exists!");
            console.error(error);
            return EXISTS.ERROR; // we do not want to create anything, if something else goes wrong
        }
    }
}
/*
905825659648086046
905825659648086046
*/