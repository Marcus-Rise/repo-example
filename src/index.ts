import {CAT_SERVICE_PROVIDER, ICatService} from "./cat/cat.service-interface";
import {container} from "./ioc/container-business-mock";

const catService = container.get<ICatService>(CAT_SERVICE_PROVIDER);

catService.getTheBiggest()
    .then(async (cat) => {
        const happyCat = await catService.feedCatByName(cat.name);

        console.info(`${happyCat.name} with size: ${happyCat.size} has been feed`);
        console.log(happyCat.mew());
    })

