export interface AddFriendMessage {
    encodedName: [ number, number ]; // high and low bits of a long
    worldId: number;
}
