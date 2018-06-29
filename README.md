# rs317-outbound-messages

Schema for server -> client messages in RuneScape revision 317

## Regarding encoding

The schema here is not a 1:1 match to the data received by the client but rather the actual data the server is sending.

For example, when the client reads a name it is always done as an encoded 64-bit int. In these schemas, that will simply be a string - the encoding is an implementation detail of the network layer.

Similarly, chat messages pack colours and effects into a single number. They are separate in the schema.