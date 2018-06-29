export interface CreateObjectMessage {
    position: number; // x and y packed into one number
    objectId: number;
    typeAndRotation: number; // type and rotation packed into one number
}
