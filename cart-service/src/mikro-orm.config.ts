// import { MikroORM } from '@mikro-orm/core';
// import { IceCream } from "./entities/icecream";

import { MikroORM } from "@mikro-orm/core";

export default {
    entitiesDirs: ['./dist/entities'],
    entitiesDirsTs: ['./src/entities'],
    host: '192.168.3.69',
    dbName: 'postgres',
    port: 5432,
    user: 'postgres',
    password: 'test',
    type: 'postgresql',
    debug: true
  } as Parameters<typeof MikroORM.init>[0];