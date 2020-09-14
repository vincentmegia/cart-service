import { MikroORM } from '@mikro-orm/core';
import Icecream from './entities/icecream';
import microConfig from './mikro-orm.config';
import { IcecreamRepository } from './icecream/repositories/icecream.repository';

const main = async () => {
    const orm = await MikroORM.init(microConfig);
    const repo = new IcecreamRepository();
    const list = repo.getAll();
    console.log(list);
    const icecream = orm.em.create(Icecream, {name: 'name', description: 'descriptopn'});
    await orm.em.persistAndFlush(icecream); 
    await orm.em.nativeInsert(Icecream, {name: 'name2', description: 'description2'})
}

main()
.catch(error => {
    console.log(error)
}); 