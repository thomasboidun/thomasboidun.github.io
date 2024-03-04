import { APP_NAME, PUBLIC_BASE_PATH } from "/app/shared/index.js";
import { TemplatePart } from "/app/shared/TemplatePart.js";

export const HomeTemplate = new TemplatePart({
    name: 'home',
    path: '#home',
    wrapper: '#app-router',
    template: `${PUBLIC_BASE_PATH}/home/home.template.html`,
    stylesheet: `${PUBLIC_BASE_PATH}/home/home.template.css`,
    data: { title: 'Home' },
    events: {
        onInit: function () {
            document.title = `${this.data.title} - ${APP_NAME}`;
        }
    }
});