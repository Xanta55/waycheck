import type { RecordModel } from "pocketbase";

export interface Inventory extends RecordModel {
    items: JSON;
}