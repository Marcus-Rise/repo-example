import {ICat} from "./cat.interface";

export const CAT_REPOSITORY_PROVIDER = Symbol("ICatRepository");

export interface ICatRepository {
    save(cat: ICat): Promise<void>

    list(): Promise<ICat[]>;

    find(filter: { name?: string, size?: number }): Promise<ICat | null>;
}

