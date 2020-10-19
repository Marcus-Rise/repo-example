import {ICat} from "./cat.interface";

export const CAT_REPOSITORY_PROVIDER = Symbol("ICatRepository");

export interface ICatRepository {
    list(): Promise<ICat[]>;

    get(filter: { name?: string, size?: number }): Promise<ICat | null>;
}

