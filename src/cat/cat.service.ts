import {ICat} from "./cat.interface";
import {ICatService} from "./cat.service-interface";
import {ICatRepository} from "./cat.repository-interface";

export class CatService implements ICatService {
    constructor(private readonly repo: ICatRepository) {
    }

    async feedCatByName(name: string): Promise<ICat> {
        const cat = await this.repo.get({name});

        if (!cat) {
            throw new Error(`cat with name ${name} is not found`);
        }

        cat.isHungry = false;

        return cat;
    }

    async getTheBiggest(): Promise<ICat> {
        const cats = await this.repo.list();

        return cats.reduce(((previousValue, currentValue) => {
            return currentValue.size > previousValue.size ? currentValue : previousValue;
        }))
    }
}
