import {ICat} from "./cat.interface";
import {ICatRepository} from "./cat.repository-interface";

export class CatFromApiRepository implements ICatRepository {
    async get(filter: { name?: string; size?: number }): Promise<ICat | null> {
        const response = await fetch(`/api/cat?name=${filter.name}&size=${filter.size}`)

        return response.json();
    }

    async list(): Promise<ICat[]> {
        const response = await fetch(`/api/cat`)

        return response.json();
    }
}
