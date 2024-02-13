import type { ClientResponseError, RecordModel } from "pocketbase";
import { pb } from ".";

export function createEntry(collectionID: string, entry: string) {
    pb.collection(collectionID).create({
        Ough: entry
    });
}

export async function getAllEntries(collectionID: string): Promise<RecordModel[]> {
    let out: RecordModel[] = [];
    console.log('Looking up table: '+collectionID);
    return pb.collection(collectionID).getFullList();
}