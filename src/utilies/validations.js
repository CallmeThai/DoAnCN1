export const isValiEmail = stringEmail => {
    return /^\w+([\.-]?\w+)+$/.test(stringEmail);
};
export const isValiPassword = stringPassword => stringPassword.length >= 2;

export const isValiRePassword = (stringRePassword, stringPassword) =>
    stringRePassword == stringPassword;