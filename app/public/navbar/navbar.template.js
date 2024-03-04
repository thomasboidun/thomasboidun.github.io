import { PUBLIC_BASE_PATH } from "/app/shared/index.js";
import { TemplatePart } from "/app/shared/TemplatePart.js";

export const NavbarTemplate = new TemplatePart({
    name: 'navbar',
    wrapper: '#app-navbar',
    template: `${PUBLIC_BASE_PATH}/navbar/navbar.template.html`,
    stylesheet: `${PUBLIC_BASE_PATH}/navbar/navbar.template.css`,
    data: {
        navLinks: [
            {
                label: 'Home',
                icon: 'fa-brands fa-fort-awesome',
                url: '#home'
            },
            {
                label: 'Profile',
                icon: 'fa-solid fa-skull',
                url: '#profile'
            },
            {
                label: 'Skills',
                icon: 'fa-solid fa-hat-wizard fa-sm',
                url: '#skills'
            },
            {
                label: 'Projects',
                icon: 'fa-solid fa-scroll',
                url: '#projects'
            },
            {
                label: 'Leisures',
                icon: 'fa-solid fa-gamepad',
                url: '#leisures'
            },
            {
                label: 'Contact',
                icon: 'fa-solid fa-comments',
                url: '#contact'
            },
        ],
    },
    events: {
        onInit: function () {
            const navbar = document.querySelector(this.wrapper);
            const ul = navbar.querySelector('.navbar-nav');

            for (const link of this.data.navLinks) {
                const li = document.createElement('li');
                li.classList.add('nav-item');

                const a = document.createElement('a');
                a.classList.add('nav-link');
                a.setAttribute('href', link.url);

                const i = document.createElement('i');
                i.classList = link.icon;

                const span = document.createElement('span');
                span.classList.add('link-text');

                const text = document.createTextNode(link.label);

                span.appendChild(text);
                a.appendChild(i);
                a.appendChild(span);
                li.appendChild(a);
                ul.appendChild(li);
            }
        }
    }
});
