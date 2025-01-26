function PasswordCheck(password) {
    password = String(password);
    const Length = password.length >= 8;
    const Digit = /\d/.test(password);
    const UpperCase = password !== password.toLowerCase();
    const LowerCase = password !== password.toUpperCase();

    if (Length && Digit && UpperCase && LowerCase) {
        return "Strong"
    } else {
        return "Weak"
    }
}

console.log(PasswordCheck("Password555"))
