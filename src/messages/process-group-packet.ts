import { CreateGroundItemExcludePlayerMessage } from "./world/create-ground-item-exclude-player";
import { UpdateGroundItemCountMessage } from "./world/update-ground-item-count";
import { PlaySoundAtLocationMessage } from "./audio/play-sound-at-location";
import { TransformPlayerToObjectMessage } from "./transform-player-to-object";
import { CreateObjectMessage } from "./world/create-object";
import { CreateGroundItemMessage } from "./world/create-ground-item";
import { RemoveObjectMessage } from "./world/remove-object";
import { CreateProjectileMessage } from "./world/create-projectile";
import { CreateGraphicMessage } from "./world/create-graphic";
import { CreateAnimatedObjectMessage } from "./world/create-animated-object";
import { RemoveGroundItemsExcludeSingleMessage } from "./world/remove-ground-items-exclude-single";

// opcode 60

export interface ProcessGroupPacketMessage {
    x: number;
    y: number;

    packets: {
        opcode: number;
        data: UpdateGroundItemCountMessage
            | PlaySoundAtLocationMessage
            | CreateGroundItemExcludePlayerMessage
            | RemoveGroundItemsExcludeSingleMessage
            | CreateAnimatedObjectMessage
            | TransformPlayerToObjectMessage
            | CreateObjectMessage
            | CreateGraphicMessage
            | CreateGroundItemMessage
            | RemoveObjectMessage
            | CreateProjectileMessage;
    }[];
}