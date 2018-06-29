// opcode 34 and 53

export interface SetInterfaceItemCollectionMessage {
    interfaceId: number;

    items: {
        slot: number;
        id: number;
        amount: number;
    }[];
}
