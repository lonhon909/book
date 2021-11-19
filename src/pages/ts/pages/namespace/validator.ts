interface Account {
    account: string
    password: string
}
const regAccount = /^(?=.*[a-zA-Z])(?=.*\d)[0-9a-zA-Z]{6,18}$/;
const regPassword = /^(?=.*[a-zA-Z])(?=.*\d)[0-9a-zA-Z]{6,18}$/;

export function checkAccount(data: Account): boolean {
    return regAccount.test(data.account) && regPassword.test(data.password);
}