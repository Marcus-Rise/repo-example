import {ICat} from "./cat.interface";

export const CAT_SERVICE_PROVIDER = Symbol("CAT_SERVICE_PROVIDER")

export interface ICatService {
    getTheBiggest(): Promise<ICat>;

    feedCatByName(name: string): Promise<ICat>;
}

