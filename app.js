import { Loader } from "/app/shared/Loader.js";
import { Router } from "/app/shared/Router.js";
import { NavbarTemplate } from '/app/public/index.js';

const app = async () => {
    Loader.show();
    await NavbarTemplate.init();
    await Router.init();
    return Promise.resolve('app works!');
}

app()
    .then((res) => {
        console.log(res);
    })
    .catch(error => {
        console.error('Une erreur s\'est produite :', error);
    })
    .finally(() => {
        Loader.hide();
    });
