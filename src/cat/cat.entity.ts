import {ICat} from "./cat.interface";

export class CatEntity {
    constructor(
        public name: string = "",
        public size: number = 1,
        public isHungry: boolean = false,
    ) {
    }

    static getFromICat(iCat: ICat) {
        return new CatEntity(iCat.name, iCat.size, iCat.isHungry);
    }

    mew(): string {
        return `m${new Array(this.size).fill("e").join("")}w`;
    }
}
