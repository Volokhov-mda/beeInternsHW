function GetCookieKeyValue() {
    let cookies = document.cookie.split('; ');

    for (let i = 0; i < cookies.length; i++) {
        let parsedCookie = cookies[i].split('=');
        
        personInfo[parsedCookie[0]] = parsedCookie[1];
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
        document.cookie = `userPatronymic=DELETED;max-age=0`
    }

    for (let i = 0; i < Object.keys(personInfo).length; i++) {
        document.cookie = `${Object.keys(personInfo)[i]}=${Object.values(personInfo)[i]};max-age=600`;
    }
});

document.addEventListener('DOMContentLoaded', () => {
    GetCookieKeyValue();

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
