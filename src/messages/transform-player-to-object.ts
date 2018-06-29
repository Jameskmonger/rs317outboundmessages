// opcode 147

export interface TransformPlayerToObjectMessage {
    offsetXA: number;
    offsetYA: number;
    offsetXB: number;
    offsetYB: number;

    targetPlayer: number;

    tileHeight: number;
    tileWidth: number;
    
    startDelay: number;
    endDelay: number;

    objectType: number;
    objectRotation: number;

    objectId: number;
}
