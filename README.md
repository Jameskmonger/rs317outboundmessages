# rs317outboundmessages

Schema for server -> client messages in RuneScape revision 317

## Installation

```
npm install rs317outboundmessages
```

## Usage

```typescript
import { SpinCameraMessage } from "rs317outboundmessages";

const message: SpinCameraMessage = {
    x: 200,
    y: 150,
    height: 18,
    speed: 6,
    angle: 32
};

player.send(message);
```

## Regarding encoding

The schema here is not a 1:1 match to the data received by the client but rather the actual data the server is sending.

For example, when the client reads a name it is always done as an encoded 64-bit int. In these schemas, that will simply be a string - the encoding is an implementation detail of the network layer.

Similarly, chat messages pack colours and effects into a single number. They are separate in the schema.