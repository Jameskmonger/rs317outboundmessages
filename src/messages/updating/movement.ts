export interface WalkMovementUpdate {
    direction: number;
    furtherUpdateRequired: boolean;
}

export interface RunMovementUpdate {
    lastDirection: number;
    currentDirection: number;
    furtherUpdateRequired: boolean;
}

export interface PlaceMovementUpdate {
    x: number;
    y: number;
    plane: number;
    clearWaypointQueue: boolean;
    furtherUpdateRequired: boolean;
}

export interface MovementUpdate<TData> {
    movementUpdateType: number;
    movementUpdateData: TData;
}
