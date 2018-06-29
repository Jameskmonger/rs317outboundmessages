export interface SendPrivateMessageMessage {
    messageId: number;
    encodedRecipientName: [ number, number ]; // high and low bits of a long
    senderRights: number; // admin/mod level
}
