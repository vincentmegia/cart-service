import { IcecreamRepository } from '../repositories/icecream.repository';
import Icecream from '../../entities/icecream';

export class IcecreamController {
    constructor(icecreamRepository: IcecreamRepository) {
        this.icecreamRepository = icecreamRepository;
    }
}
