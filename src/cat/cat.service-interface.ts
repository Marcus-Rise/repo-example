import {CatEntity} from "./cat.entity";
import {ICat} from "./cat.interface";

export const CAT_SERVICE_PROVIDER = Symbol("CAT_SERVICE_PROVIDER")

export interface ICatService {
    add(iCat: ICat): Promise<void>;

    getTheBiggest(): Promise<CatEntity>;

    feedCatByName(name: string): Promise<CatEntity>;
}

