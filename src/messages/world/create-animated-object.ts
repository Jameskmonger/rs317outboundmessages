// opcode 160

export interface CreateAnimatedObjectMessage {
    offsetX: number;
    offsetY: number;

    objectType: number;
    objectOrientation: number;

    animationId: number;
}
