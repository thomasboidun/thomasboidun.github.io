const profile = {
    fullname: 'Thomas BOIDUN',
    age: `${new Date().getFullYear() - 1994} ans`,
    job: 'Concepteur Développeur d\'Applications',
    picture: './assets/img/IMG_1279.JPG',
};

for (let key of Object.keys(profile)) {
    for (let el of [...document.querySelectorAll(`[data-profile-${key}]`)]) {
        el.tagName === 'IMG' ?
            el.setAttribute('src', profile.picture) :
            el.textContent = profile[key];
    }
}

