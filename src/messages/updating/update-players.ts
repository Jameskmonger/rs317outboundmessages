import { AnimationUpdateBlock, DamageUpdateBlock, GraphicsUpdateBlock, InteractingEntityUpdateBlock, ForceTextUpdateBlock, FacingCoordinateUpdateBlock } from "./blocks";
import { EntityListData } from "./entity-list-data";
import { MovementUpdate, RunMovementUpdate, WalkMovementUpdate, PlaceMovementUpdate } from "./movement";

interface AnimatedWalkUpdateBlock {
    startX: number;
    startY: number;
    endX: number;
    endY: number;
    delayStart: number;
    delayEnd: number;
    direction: number;
}

interface ChatUpdateBlock {
    color: number;
    effect: number;
    rights: number;
    message: string;
}

interface AppearanceUpdateBlock {
    size: number;

    gender: number;
    headicon: number;

    equipment: {
        itemId: number;
        npcId?: number;
    }[];

    colors: [ number, number, number, number, number ];

    animations: {
        stand: number;
        standTurn: number;
        walk: number;
        run: number;
        turnAbout: number;
        turnRight: number;
        turnLeft: number;
    };

    name: number;
    combatLevel: number;
    skill: number;
}

export interface UpdatePlayersMessage {
    local: {
        updateRequired: boolean;
        movementUpdate?: MovementUpdate<WalkMovementUpdate | RunMovementUpdate | PlaceMovementUpdate>;
    };

    others: {
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
            AnimatedWalkUpdateBlock
            | AnimationUpdateBlock
            | AppearanceUpdateBlock
            | ChatUpdateBlock
            | DamageUpdateBlock
            | FacingCoordinateUpdateBlock
            | ForceTextUpdateBlock
            | GraphicsUpdateBlock
            | InteractingEntityUpdateBlock
        )[];
    }[];
}
