import {Container} from "inversify";
import {CAT_SERVICE_PROVIDER, ICatService} from "../cat/cat.service-interface";
import {CatService} from "../cat/cat.service";
import {CAT_REPOSITORY_PROVIDER, ICatRepository} from "../cat/cat.repository-interface";
import {CatInMemoryRepository} from "../cat/cat-in-memory.repository";

const container = new Container();

container.bind<ICatRepository>(CAT_REPOSITORY_PROVIDER).to(CatInMemoryRepository).inSingletonScope();
container.bind<ICatService>(CAT_SERVICE_PROVIDER).to(CatService);

export {container}
