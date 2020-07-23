function GetCookieKeyValue() {
    let cookies = document.cookie.split('; ');

    for (let i = 0; i < cookies.length; i++) {
        let parsedCookie = cookies[i].split('=');
        
        fullName[parsedCookie[0]] = parsedCookie[1];
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    let fullName = 
    {
        'userName': nameInput.value.trim(), 
        'userSurname': surnameInput.value.trim()
    };

    if (patronymicInput.value.trim()) {
        fullName['userPatronymic'] = patronymicInput.value.trim();
    } else {
        delete fullName['userPatronymic'];
        document.cookie = `userPatronymic=DELETED;max-age=0`
    }

    for (let i = 0; i < Object.keys(fullName).length; i++) {
        document.cookie = `${Object.keys(fullName)[i]}=${Object.values(fullName)[i]};max-age=600`;
    }
});

document.addEventListener('DOMContentLoaded', () => {
    GetCookieKeyValue();

    if (fullName['userSurname']) {
        surnameInput.value = fullName['userSurname'];
    }

    if (fullName['userName']) {
        nameInput.value = fullName['userName'];
    }

    if (fullName['userPatronymic']) {
        patronymicInput.value = fullName['userPatronymic'];
    }
});
