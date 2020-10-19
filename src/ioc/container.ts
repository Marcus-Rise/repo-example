import {Container} from "inversify";
import {CAT_SERVICE_PROVIDER, ICatService} from "../cat/cat.service-interface";
import {CatServiceMock} from "../cat/cat.service.mock";

const container = new Container();

container.bind<ICatService>(CAT_SERVICE_PROVIDER).to(CatServiceMock);

export {container}
