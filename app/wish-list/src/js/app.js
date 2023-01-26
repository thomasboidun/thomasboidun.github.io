"use stric";

const url = 'https://script.google.com/macros/s/AKfycbzH6V_jfcDlWjNBQa9MmgvaexERBrE4hTpwLY-NIFtlZx1pckYbbkU3zIexau6Vp_JZqw/exec';

const request = () => {
    const param = {
        method: 'POST',
        body: JSON.stringify({
            sheet: 'user',
            action: 'update',
            options: {
                data: {
                    email: 'thomas.boidun@gmail.com',
                    username: 'tomatochan',
                    password: 'password'
                }
            },
            filter: null
        }),
    }

    fetch(url, param)
        .then(async (response) => {
            const res = await response.json();

            if (res.status == 'error') throw res;

            return res.data || res;
        })
        .then(data => { console.log(data); })
        .catch(error => { console.error(error) });
}

// request();


const registerButton = document.querySelector('a[href="sign-up"]');

registerButton.addEventListener('click', event => {
    event.preventDefault();
    const registerDialog = document.getElementById('register-dialog');
    registerDialog.classList.replace('hide', 'visible');
})

const registerForm = document.getElementById('register-form');

registerForm.addEventListener('submit', event => {

    event.preventDefault();

    const registerFormData = new FormData(registerForm);

    const user = [...registerFormData.entries()]
        .reduce((previous, current) => {
            const key = current[0], value = current[1];
            return { ...previous, [key]: value };
        }, {});

    console.log(user);

    // Todo: check values

    const validator = {
        email: new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/),
        password: new RegExp(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)
    };

    const check = Object.keys(validator)
        .map(key => { return validator[key].test(user[key]); })
        .every(value => value === true);

    console.log(check);

    if (!check) {
        let helper;

        helper = document.getElementById('register-form-email-helper');

        if (!validator.email.test(user.email)) {
            helper.textContent = 'Votre adresse email est invalide.';
        } else {
            helper.textContent = 'Votre adresse email est valide.';
        }

        helper = document.getElementById('register-form-password-helper');

        if (!validator.password.test(user.password)) {
            helper.textContent = 'Votre mot de passe doit contenir au minimum 8 caractères dont au moins une lettre et un chiffre.';
        }

        throw new Error('Invalid form!');
    }

    const param = {
        method: 'POST',
        body: JSON.stringify({
            sheet: 'user',
            action: 'create',
            options: {
                data: user
            },
            filter: null
        }),
    }

    fetch(url, param)
        .then(async (response) => {
            const res = await response.json();

            if (res.status == 'error') throw res;

            return res.data || res;
        })
        .then(data => { console.log(data); })
        .catch(error => { console.error(error) });
});