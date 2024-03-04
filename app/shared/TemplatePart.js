export class TemplatePart {
    name;
    path;
    wrapper;
    template;
    stylesheet;

    data = {};
    events = {
        onInit: () => { },
        onDestroy: () => { }
    };

    constructor(options = {}) {
        this.name = options?.name;
        this.path = options?.path;
        this.wrapper = options?.wrapper;
        this.template = options?.template;
        this.stylesheet = options?.stylesheet;

        this.data = options?.data;
        this.events = {
            onInit: options?.events?.onInit?.bind(this) ?? this.events.onInit,
            onDestroy: options?.events?.onDestroy?.bind(this) ?? this.events.onDestroy
        };
    }

    async init() {
        const htmlContent = await fetch(this.template).then(res => res.text());
        const element = document.querySelector(this.wrapper);
        element.innerHTML = htmlContent;

        const head = document.querySelector('head');
        const link = document.createElement('link');
        link.setAttribute('id', `${this.name}-stylesheet`);
        link.setAttribute('rel', 'stylesheet');
        link.setAttribute('href', this.stylesheet);
        head.insertBefore(link, head.lastChild);

        this.events?.onInit();

        return Promise.resolve(`${this.name} template works!`);
    }

    async destroy() {
        document.querySelector(this.wrapper).innerHTML = '';
        document.getElementById(`${this.name}-stylesheet`)?.remove();

        this?.events?.onDestroy();

        return Promise.resolve(`${this.name} template destroyed!`);
    }
}