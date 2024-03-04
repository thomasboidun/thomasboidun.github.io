import { APP_NAME, PUBLIC_BASE_PATH } from "/app/shared/index.js";
import { TemplatePart } from "/app/shared/TemplatePart.js";

export const LeisuresTemplate = new TemplatePart({
    name: 'leisures',
    path: '#leisures',
    wrapper: '#app-router',
    template: `${PUBLIC_BASE_PATH}/leisures/leisures.template.html`,
    stylesheet: `${PUBLIC_BASE_PATH}/leisures/leisures.template.css`,
    data: { title: 'Leisures' },
    events: {
        onInit: function () {
            document.title = `${this.data.title} - ${APP_NAME}`;
        }
    }
});