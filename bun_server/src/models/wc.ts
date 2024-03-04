import type { RecordModel } from "pocketbase";
import type { Inventory } from "./wc_inventory";

export interface Waycheck extends RecordModel{
    discordID: string;
    inventory: Inventory;
    activity: string;
    stats: JSON;
    name: string;
    serverID: string;
}