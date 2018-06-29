export interface ConstructMapRegionMessage {
    regionX: number;
    regionY: number;

    tiles: {
        tileExists: boolean;

        tileData?: {
            x: number;
            y: number;
            z: number;
            rotation: number;
        };
    }[];
}
