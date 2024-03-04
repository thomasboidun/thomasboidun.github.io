import { APP_NAME, PUBLIC_BASE_PATH } from "/app/shared/index.js";
import { TemplatePart } from "/app/shared/TemplatePart.js";

export const ProfileTemplate = new TemplatePart({
    name: 'profile',
    path: '#profile',
    wrapper: '#app-router',
    template: `${PUBLIC_BASE_PATH}/profile/profile.template.html`,
    stylesheet: `${PUBLIC_BASE_PATH}/profile/profile.template.css`,
    data: { title: 'Profile' },
    events: {
        onInit: function () {
            document.title = `${this.data.title} - ${APP_NAME}`;
        }
    }
});