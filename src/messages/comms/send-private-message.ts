export interface SendPrivateMessageMessage {
    messageId: number;
    recipientName: string;
    senderRights: number; // admin/mod level
}
