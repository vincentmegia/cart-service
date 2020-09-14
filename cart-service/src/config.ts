export class Config {
    dbConfig: DatabaseConfig;
    applicationDebug: boolean;

    constructor() {
        // this.dbConfig = new DatabaseConfig ());
    }
}

class DatabaseConfig {
    clientUrl: string;
    name: string;
    type: string;
    user: string;
    password: string;

    constructor(clientUrl: string, 
        name: string, 
        type: string, 
        user: string, 
        password: string) {
        this.clientUrl = clientUrl;
        this.name = name;
        this.type = type;
        this.user = user;
        this.password = password;
    }
}