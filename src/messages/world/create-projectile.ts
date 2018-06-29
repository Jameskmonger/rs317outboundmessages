export interface CreateProjectileMessage {
    offsetXA: number;
    offsetYA: number;
    offsetXB: number;
    offsetYB: number;
    target: number;
    graphicId: number;
    heightStart: number;
    heightEnd: number;
    startDelay: number;
    speed: number;
    initialSlope: number;
    initialDistanceFromSource: number;
}
