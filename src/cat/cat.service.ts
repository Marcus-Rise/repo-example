import {ICatService} from "./cat.service-interface";
import {ICatRepository} from "./cat.repository-interface";
import {CatAddDto} from "./cat-add.dto";
import {validate} from "class-validator";
import {CatEntity} from "./cat.entity";
import {ICat} from "./cat.interface";

export class CatService implements ICatService {
    constructor(private readonly repo: ICatRepository) {
    }

    async feedCatByName(name: string): Promise<CatEntity> {
        const iCat = await this.repo.find({name});

        if (!iCat) {
            throw new Error(`cat with name ${name} is not found`);
        }

        const cat = CatEntity.getFromICat(iCat);
        cat.isHungry = false;

        return cat;
    }

    async getTheBiggest(): Promise<CatEntity> {
        const iCatArray = await this.repo.list();

        const iCat = iCatArray.reduce(((previousValue, currentValue) => {
            return currentValue.size > previousValue.size ? currentValue : previousValue;
        }));

        return CatEntity.getFromICat(iCat);
    }

    async add(iCat: ICat): Promise<void> {
        const dto = new CatAddDto(iCat);
        const errors = await validate(dto);

        if (!errors.length) {
            throw new Error(`${CatAddDto.name} is not valid`);
        }

        return this.repo.save(CatEntity.getFromICat(iCat))
    }
}
