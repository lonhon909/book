var regAccount = /^(?=.*[a-zA-Z])(?=.*\d)[0-9a-zA-Z]{6,18}$/;
var regPassword = /^(?=.*[a-zA-Z])(?=.*\d)[0-9a-zA-Z]{6,18}$/;
export function checkAccount(data) {
    return regAccount.test(data.account) && regPassword.test(data.password);
}
