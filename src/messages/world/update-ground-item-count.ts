// opcode 84

export interface UpdateGroundItemCountMessage {
    offsetX: number;
    offsetY: number;

    targetItemId: number;
    targetItemCurrentCount: number;

    newCount: number;
}
