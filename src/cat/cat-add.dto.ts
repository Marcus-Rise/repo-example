import {IsNotEmpty, Min} from "class-validator";
import {ICat} from "./cat.interface";

export class CatAddDto {
    @IsNotEmpty()
    name: string;

    @Min(1)
    size: number;

    constructor(iCat: ICat) {
        this.name = iCat.name;
        this.size = iCat.size;
    }
}
