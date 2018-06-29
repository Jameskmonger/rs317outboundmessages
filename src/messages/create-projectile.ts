export interface CreateProjectileMessage {
    positionOffset: number;
    offsetX: number;
    offsetY: number;
    target: number;
    graphicId: number;
    heightStart: number;
    heightEnd: number;
    startDelay: number;
    speed: number;
    initialSlope: number;
    initialDistanceFromSource: number;
}
