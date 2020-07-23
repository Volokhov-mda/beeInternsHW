function GetLocalStorageKeyValue() {
    let localStorage = window.localStorage;

    for (let i = 0; i < localStorage.length; i++) {
        fullName[Object.keys(localStorage)[i]] = Object.values(localStorage)[i];
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
        window.localStorage.removeItem('userPatronymic');
    }

    for (let i = 0; i < Object.keys(fullName).length; i++) {
        window.localStorage.setItem(Object.keys(fullName)[i], Object.values(fullName)[i]);
    }
});

document.addEventListener('DOMContentLoaded', () => {
    GetLocalStorageKeyValue();

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
