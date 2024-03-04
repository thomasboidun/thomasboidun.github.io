import { APP_NAME, PUBLIC_BASE_PATH } from "/app/shared/index.js";
import { TemplatePart } from "/app/shared/TemplatePart.js";

export const SkillsTemplate = new TemplatePart({
    name: 'skills',
    path: '#skills',
    wrapper: '#app-router',
    template: `${PUBLIC_BASE_PATH}/skills/skills.template.html`,
    stylesheet: `${PUBLIC_BASE_PATH}/skills/skills.template.css`,
    data: { title: 'Skills' },
    events: {
        onInit: function () {
            document.title = `${this.data.title} - ${APP_NAME}`;
        }
    }
});