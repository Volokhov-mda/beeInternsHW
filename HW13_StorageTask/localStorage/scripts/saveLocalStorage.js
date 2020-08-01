function GetLocalStorageKeyValue() {
    let localStorage = window.localStorage;

    for (let i = 0; i < localStorage.length; i++) {
        personInfo[Object.keys(localStorage)[i]] = Object.values(localStorage)[i];
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    let personInfo = 
    {
        'userName': nameInput.value.trim(), 
        'userSurname': surnameInput.value.trim(),
        'doesLikeSport': sportCheckbox.checked
    };

    if (patronymicInput.value.trim()) {
        personInfo['userPatronymic'] = patronymicInput.value.trim();
    } else {
        delete personInfo['userPatronymic'];
        window.localStorage.removeItem('userPatronymic');
    }

    for (let i = 0; i < Object.keys(personInfo).length; i++) {
        window.localStorage.setItem(Object.keys(personInfo)[i], Object.values(personInfo)[i]);
    }
});

document.addEventListener('DOMContentLoaded', () => {
    GetLocalStorageKeyValue();

    if (personInfo['userSurname']) {
        surnameInput.value = personInfo['userSurname'];
    }

    if (personInfo['userName']) {
        nameInput.value = personInfo['userName'];
    }

    if (personInfo['userPatronymic']) {
        patronymicInput.value = personInfo['userPatronymic'];
    }

    sportCheckbox.checked = personInfo['doesLikeSport']  == 'true' ? true : false;
});
