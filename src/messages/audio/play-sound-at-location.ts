// opcode 105

export interface PlaySoundAtLocationMessage {
    offsetX: number;
    offsetY: number;

    trackId: number;
    radius: number;
    loopCount: number;
}