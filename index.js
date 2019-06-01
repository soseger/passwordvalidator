/**
 * Password validator. Rules:
 * There needs to be at least 1 uppercase letter.
 * There needs to be at least 1 lowercase letter.
 * There needs to be at least 1 number.
 * The password needs to be at least 8 characters long.
 */

const MIN_LENGTH = 8;

function hasSmallChar (string) {
    return string !== string.toUpperCase();
}

function hasUpperChar (string) {
    return string !== string.toLowerCase();
}

function hasNumber (string) {
    return string.match(/[0-9]/);
}

function hasEightChars (string) {
    return string.length >= MIN_LENGTH;
}

 function password (password) {
    return Boolean(
        password 
        && hasEightChars(password) 
        && hasNumber(password) 
        && hasSmallChar(password) 
        && hasUpperChar(password)
    );
 }

module.exports = password;