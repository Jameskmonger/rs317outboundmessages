export interface CreateProjectileMessage {
    positionOffset: number; // x and y packed into one number
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
