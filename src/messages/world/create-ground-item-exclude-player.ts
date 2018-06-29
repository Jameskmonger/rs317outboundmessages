// opcode 215

export interface CreateGroundItemExcludePlayerMessage {
    offsetX: number;
    offsetY: number;

    itemId: number;
    itemCount: number;

    excludedPlayerId: number;
}
