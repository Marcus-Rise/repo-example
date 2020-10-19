import {CAT_SERVICE_PROVIDER, ICatService} from "./cat/cat.service-interface";
import {container} from "./ioc/container-business-mock";

const catService = container.get<ICatService>(CAT_SERVICE_PROVIDER);

catService.add({name: "kitty", size: 3, isHungry: true})
    .then(async () => {
        const {name} = await catService.getTheBiggest()
        const happyCat = await catService.feedCatByName(name);

        console.info(`${happyCat.name} with size: ${happyCat.size} has been feed`);
        console.log(happyCat.mew());
    });


