import {ICat} from "./cat.interface";
import {ICatRepository} from "./cat.repository-interface";

export class CatFromApiRepository implements ICatRepository {
    async get(filter: { name?: string; size?: number }): Promise<ICat | null> {
        let res: ICat | null = null;

        await fetch(`/api/cat?name=${filter.name}&size=${filter.size}`)
            .then((res) => res.json())
            .then((data) => {
                res = data;
            })
            .catch(console.error);

        return res;
    }

    async list(): Promise<ICat[]> {
        let res: ICat[] = [];

        await fetch(`/api/cat`)
            .then((res) => res.json())
            .then((data) => {
                res = data;
            })
            .catch(console.error);

        return res;
    }
}
