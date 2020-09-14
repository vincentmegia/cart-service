import proxyquire from './node_modules/proxyquire';

describe('test mock of repo', () => {
    const list = [
        new Icecream('gelato', 'gelato sarap'),
            new Icecream('gelato1', 'gelato sarap1') 
    ];
    const repository = proxyquire('../Icecream/repositories/icecream.repository', {
        'getAll': () => {return list;},
        'noCallThru': true
    })
})