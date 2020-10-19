import {ICat} from "./cat.interface";
import {ICatRepository} from "./cat.repository-interface";

export class CatInMemoryRepository implements ICatRepository {
    private collection = [
        {
            name: "cat",
            size: 5,
            isHungry: true,
            mew(): string {
                return "meeeeew!";
            }
        }
    ];

    async get(filter: { name?: string; size?: number }): Promise<ICat | null> {
        const cat =  this.collection.find((i) => {
            let res: boolean = true;

            if (filter.name) {
                res = i.name === filter.name;
            }

            if (res && filter.size) {
                res = i.size === filter.size;
            }

            return res;
        });

        return cat ?? null;
    }

    async list(): Promise<ICat[]> {
        return this.collection.slice();
    }
}
