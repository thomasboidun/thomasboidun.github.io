export class Loader {
    static selector = '#loader';
    static timeout = null;
    static timeoutDuration = 1000;

    static show() {
        document.querySelector(Loader.selector).style.display = 'flex';
    }

    static showWithDelay() {
        Loader.timeout = setTimeout(() => {
            Loader.show();
            Loader.timeout = null;
        }, Loader.timeoutDuration);
    }

    static hide() {
        Loader.clearTimeout();
        document.querySelector(Loader.selector).style.display = 'none';
    }

    static clearTimeout() {
        if(Loader.timeout) {
            clearTimeout(Loader.timeout);
            Loader.timeout = null;
        }
    }
};