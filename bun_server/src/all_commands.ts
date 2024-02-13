import { type Command } from "./Command";
import { PocketBased } from "./commands/db";
import { Hello } from "./commands/hello";

export const Commands: Command[] = [Hello, PocketBased];