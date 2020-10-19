import {ICat} from "./cat.interface";
import {ICatService} from "./cat.service-interface";
import {CatEntity} from "./cat.entity";

export class CatServiceMock implements ICatService {
    async getTheBiggest(): Promise<CatEntity> {
        return new CatEntity("cat")
    }

    async feedCatByName(name: string): Promise<CatEntity> {
        const cat = await this.getTheBiggest();
        cat.name = name;
        cat.isHungry = false;

        return cat;
    }

    add(iCat: ICat): Promise<void> {
        return Promise.resolve(undefined);
    }
}
