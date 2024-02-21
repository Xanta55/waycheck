export enum RARITY {
    SCRAP = '⭐',
    COMMON = '⭐⭐',
    UNCOMMON = '⭐⭐⭐',
    RARE = '⭐⭐⭐⭐',
    EPIC = '⭐⭐⭐⭐⭐',
    LEGENDARY = '🍆'
}

export interface Fish {
    name: string;
    defaultSize: number;
    defaultAttack: number;
    defaultHealth: number;
    defaultValueScaling: number;
    rarity: RARITY;
    traits: string[];
    valuePerSize: number;
}

/*
Anzahl tragbare Fische skaliert mit Fischer-level.
Walk-Level erhöht Meter pro Energie.
Ernergie aus (Fish-Valuescaling * Fish-Size) * Fish-Rarity
Kampfparty: 3 Fische - die sind heilig. Die werden nicht gegessen, die werden nicht abgegeben.
Es kann nur gelaufen werden wenn man daher > 4 Fische besitzt. 1 zum Essen für Energie, 3 in Kampfparty.
Wenn > 5 Fische in besitzt kann man kämpfen, solange mehr als 1 Fisch noch nicht gegessen. 


2 : 250
3: 100

50 Energie

Energie
0:00<============||6:00#####8:00>---11:00
*/