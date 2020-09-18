export interface Group {
    name: string;
    connections: Connection[]
}

interface Connection {
    connectionId: string;
    username: string;
}