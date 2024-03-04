import { APP_NAME, PUBLIC_BASE_PATH } from "/app/shared/index.js";
import { TemplatePart } from "/app/shared/TemplatePart.js";

export const ContactTemplate = new TemplatePart({
    name: 'contact',
    path: '#contact',
    wrapper: '#app-router',
    template: `${PUBLIC_BASE_PATH}/contact/contact.template.html`,
    stylesheet: `${PUBLIC_BASE_PATH}/contact/contact.template.css`,
    data: { title: 'Contact' },
    events: {
        onInit: function () {
            document.title = `${this.data.title} - ${APP_NAME}`;
        }
    }
});