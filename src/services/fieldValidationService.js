
const inputFielsdValidation = (data) => {

    if (data.username.length < 5) {

        throw new Error('Потребителското име е твърде кратко! Минимална дължина 5 символа.');

    } else if (!data.email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {

        throw new Error('Невалиден имейл!');

    } else if (data.password.length < 4) {

        throw new Error('Паролата е твърде кратка! Минимална дължина 5 символа.');

    } else if (data.password !== data.confirmPassword) {

        throw new Error('Паролите не съвпадат!');

    } else {

        return true;

    }

}

const addValidation = (data) => {

    if(data.header === '' || data.size === '' || data.price === ''){
        return true;
    }
}

module.exports = {
    inputFielsdValidation,
    addValidation
}