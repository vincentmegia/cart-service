import { PrimaryKey, Property, Entity } from '@mikro-orm/core';

@Entity({tableName: 'icecream'})
export default class Icecream {
    @PrimaryKey()
    id!: number;

    @Property()
    name!: string;

    @Property()
    description!: string;

    constructor(name: string, description: string) {
        this.name = name;
        this.description = description;
    }
}