import { APP_NAME, PUBLIC_BASE_PATH } from "/app/shared/index.js";
import { TemplatePart } from "/app/shared/TemplatePart.js";

export const ProjectsTemplate = new TemplatePart({
    name: 'projects',
    path: '#projects',
    wrapper: '#app-router',
    template: `${PUBLIC_BASE_PATH}/projects/projects.template.html`,
    stylesheet: `${PUBLIC_BASE_PATH}/projects/projects.template.css`,
    data: { title: 'Projects' },
    events: {
        onInit: function () {
            document.title = `${this.data.title} - ${APP_NAME}`;
        }
    }
});