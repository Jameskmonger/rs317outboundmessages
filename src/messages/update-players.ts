interface WalkMovementUpdate {
    direction: number;
    furtherUpdateRequired: boolean;
}

interface RunMovementUpdate {
    lastDirection: number;
    currentDirection: number;
    furtherUpdateRequired: boolean;
}

interface PlaceMovementUpdate {
    x: number;
    y: number;
    plane: number;
    clearWaypointQueue: boolean;
    furtherUpdateRequired: boolean;
}

interface MovementUpdate<TData> {
    movementUpdateType: number;
    movementUpdateData: TData;
}

interface PlayerListData {
    observed: boolean;
    teleported: boolean;
    x: number;
    y: number;
}

interface AnimatedWalkUpdateBlock {
    startX: number;
    startY: number;
    endX: number;
    endY: number;
    delayStart: number;
    delayEnd: number;
    direction: number;
}

interface GraphicsUpdateBlock {
    graphicId: number;
    delay: number;
}

interface AnimationUpdateBlock {
    animationId: number;
    delay: number;
}

interface ForceTextUpdateBlock {
    message: string;
}

interface ChatUpdateBlock {
    color: number;
    effect: number;
    rights: number;
    message: string;
}

interface InteractingEntityUpdateBlock {
    entityId: number;
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

interface FacingCoordinateUpdateBlock {
    x: number;
    y: number;
}

interface DamageUpdateBlock {
    damageAmount: number;
    damageType: number;

    currentHealth: number;
    maxHealth: number;
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
        data?: PlayerListData;
    }[];

    block: {
        type: number;

        data: (AnimatedWalkUpdateBlock
            | GraphicsUpdateBlock
            | AnimationUpdateBlock
            | ForceTextUpdateBlock
            | ChatUpdateBlock
            | InteractingEntityUpdateBlock
            | AppearanceUpdateBlock
            | FacingCoordinateUpdateBlock
            | DamageUpdateBlock)[];
    }[];
}
