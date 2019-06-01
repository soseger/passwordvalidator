/**
 * Password validator. Rules:
 * There needs to be at least 1 uppercase letter.
 * There needs to be at least 1 lowercase letter.
 * There needs to be at least 1 number.
 * The password needs to be at least 8 characters long.
 * 
 * @param {string} password 
 */
 function password (password) {
     if (!password) {
         return false;
     }
     if (password.length < 8) {
         return false;
     }
     if (!password.match(/[0-9]/)) {
        return false;
     }
     if (!password.match(/[A-ZÅÄÖ]/)) {
         return false;
     }
     if (!password.match(/[a-zåäö]/)) {
        return false;
    }
     return true;
 }

module.exports = password;