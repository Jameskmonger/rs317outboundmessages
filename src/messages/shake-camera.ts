export interface ShakeCameraMessage {
    opcode: 0 | 1 | 2 | 3 | 4;
    jitter: number;
    amplitude: number;
    frequency: number;
}
