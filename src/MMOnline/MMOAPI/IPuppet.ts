import { Age } from "modloader64_api/OOT/OOTAPI";
import { INetworkPlayer } from "modloader64_api/NetworkHandler";
import { IModLoaderAPI } from "modloader64_api/IModLoaderAPI";
import { IPuppetData } from "./IPuppetData";
import { MMForms } from "MajorasMask/API/MMAPI";

export interface IPuppet {
    player: INetworkPlayer;
    id: string;
    data: IPuppetData;
    isSpawned: boolean;
    isSpawning: boolean;
    isShoveled: boolean;
    scene: number;
    form: MMForms;
    ModLoader: IModLoaderAPI;
    spawn(): void;
    shovel(): void;
    despawn(): void;
}

