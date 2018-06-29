import { AnimationUpdateBlock, DamageUpdateBlock, GraphicsUpdateBlock, InteractingEntityUpdateBlock, ForceTextUpdateBlock, FacingCoordinateUpdateBlock } from "./blocks";
import { EntityListData } from "./entity-list-data";
import { MovementUpdate, RunMovementUpdate, WalkMovementUpdate } from "./movement";

interface NpcDefinitionUpdateBlock {
    npcId: number;
}

// opcode 65

export interface UpdateNpcsMessage {
    movement: {
        count: number;

        data: {
            updateRequired: boolean;
            movementUpdate?: MovementUpdate<WalkMovementUpdate | RunMovementUpdate>;
        }[];
    };

    list: {
        id: number;
        data?: EntityListData;
    }[];

    block: {
        type: number;

        data: (
            AnimationUpdateBlock
            | DamageUpdateBlock
            | FacingCoordinateUpdateBlock
            | ForceTextUpdateBlock
            | GraphicsUpdateBlock
            | InteractingEntityUpdateBlock
            | NpcDefinitionUpdateBlock
        )[];
    }[];
}
