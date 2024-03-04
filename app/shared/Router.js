import { ContactTemplate, HomeTemplate, LeisuresTemplate, ProfileTemplate, ProjectsTemplate, SkillsTemplate } from "/app/public/index.js";
import { Loader } from '/app/shared/Loader.js';

export class Router {
    static state = { previous: undefined, current: undefined };
    static paths = {
        [ContactTemplate.path]: ContactTemplate,
        [HomeTemplate.path]: HomeTemplate,
        [LeisuresTemplate.path]: LeisuresTemplate,
        [ProfileTemplate.path]: ProfileTemplate,
        [ProjectsTemplate.path]: ProjectsTemplate,
        [SkillsTemplate.path]: SkillsTemplate,
    }

    static async init() {
        const path = window.location.hash;
        await Router.navigate(path.length ? path : HomeTemplate.path);

        window.addEventListener('popstate', async () => {
            const path = window.location.hash;
            Router.navigate(path);
        });
    }

    static async navigate(path) {
        Loader.showWithDelay();
        Router.state.previous = Router.state.current;
        await Router.state.previous?.destroy();
        Router.state.current = Router.paths[path];
        await Router.state.current?.init();
        Loader.hide();
    }
};
