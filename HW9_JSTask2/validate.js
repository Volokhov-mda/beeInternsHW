const takenUsernames = ['beeline', 'beeinterns', 'bee']

function validate(data) {
    const { login, password, confirmPassword, license, firstName, gender } = data;

    // Решил все-таки разделить проверки на логин и пароль, ибо форма сначала просит указать имя и пароль, но только потом
    // говорит, что данное имя пользователя уже занято. Логичнее сначала полностью проверить логин, а затем приступить к паролю.
    if (!login) {
        alert('Укажите логин');
    } else if (takenUsernames.indexOf(login) !== -1) { // эквивалентно: (login === 'beeline') || (login === 'beeinterns' || (login === 'bee'))
        alert('Данный логин уже занят');
    } else if (!password) {
        alert('Укажите пароль')
    } else if (password.length < 6) {
        alert('Пароль должен быть длинной не менее 6 символов');
    } else if (password !== confirmPassword) {
        alert('Пароли не совпадают');
    } else if (!firstName) {
        alert('Укажите Ваше имя');
    } else if (!license) {
        alert('Необходимо согласие');
    } else {
        alert((gender === 'male' ? 'Уважаемый ' : 'Уважаемая ' ) + `${firstName}, заявка создана`);
    }
}
