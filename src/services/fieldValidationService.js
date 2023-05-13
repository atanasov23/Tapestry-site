const offerFieldValidation = (data) => {

    if (data.name.length < 2) {

        throw new Error('The Name should be at least two characters');

    } else if (Number(data.price) < 0) {

        throw new Error('The Price should be a positive number');

    } else if (!/https?:\/\//.test(data.image)) {

        throw new Error('The Crypto Image should start with http:// or https://');

    } else if (data.description.length < 10) {

        throw new Error('The Description should be a minimum of 10 characters long');

    } else {

        return true;
    }
}

const inputFielsdValidation = (data) => {

    if (data.username.length < 5) {

        throw new Error('Username is too short');

    } else if (data.email.length < 10) {

        throw new Error('The email should be at least ten character long');

    } else if (data.password.length < 4) {

        throw new Error('The password should be at least four characters long');

    } else if (data.password !== data.confirmPassword) {

        throw new Error('The repeat password should be equal to the password');

    } else {

        return true;

    }

}

module.exports = {
    offerFieldValidation,
    inputFielsdValidation
}