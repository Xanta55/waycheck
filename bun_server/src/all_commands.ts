import { type Command } from "./Command";
import { CreateCall } from "./commands/create";
import { PocketBased } from "./commands/db";
import { Reload } from "./commands/reload";

export const Commands: Command[] = [PocketBased, CreateCall, Reload];