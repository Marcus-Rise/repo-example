import {ICat} from "./cat.interface";

export interface ICatRepository {
    list(): Promise<ICat[]>;

    get(filter: { name?: string, size?: number }): Promise<ICat | null>;
}

