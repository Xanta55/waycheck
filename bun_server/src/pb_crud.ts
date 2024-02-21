import type { ClientResponseError, RecordModel } from "pocketbase";
import { pb } from ".";

export function createEntry(collectionID: string, bodyParams?: { [key: string]: any }): Promise<RecordModel> {
    return pb.collection(collectionID).create(bodyParams);
}

export async function getAllEntries(collectionID: string): Promise<RecordModel[]> {
    return pb.collection(collectionID).getFullList();
}

export async function getEntry(collectionID: string, entryID: string): Promise<RecordModel> {
    return pb.collection(collectionID).getOne(entryID);
}

export async function getEntryWhere(collectionID: string, columnName: string, entryContent: string): Promise<RecordModel> {
    return pb.collection(collectionID).getFirstListItem(columnName + " = " + entryContent);
}

export async function getAllEntriesWhere(collectionID: string, filterString: string): Promise<RecordModel[]> {
    return pb.collection(collectionID).getFullList({ filter: filterString });
}

export async function updateEntry(collectionID: string, entryID: string, bodyParams?: { [key: string]: any }): Promise<RecordModel> {
    return pb.collection(collectionID).update(entryID, bodyParams);
}

export async function fetchUserKey(userID: string, serverID: string): Promise<string> {
    return (await pb.collection("userIDs").getFirstListItem('discordID = "' + userID + '" && serverID = "' + serverID + '"')).id;
}

export async function deleteEntry(collectionID: string, entryID: string) {
    pb.collection(collectionID).delete(entryID);
}
