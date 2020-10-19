import {ICat} from "./cat.interface";
import {ICatService} from "./cat.service-interface";

export class CatServiceMock implements ICatService {
    async getTheBiggest(): Promise<ICat> {
        return {
            name: "cat",
            size: 5,
            isHungry: true,
            mew(): string {
                return "meeeeew!";
            }
        }
    }

    async feedCatByName(name: string): Promise<ICat> {
        const cat = await this.getTheBiggest();
        cat.name = name;
        cat.isHungry = false;

        return cat;
    }
}
