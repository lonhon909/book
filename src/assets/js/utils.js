export const add = (arr) => {
    return arr.reduce((total, item) => total + item, 0);
};

export function isMobile() {
    let info = navigator.userAgent;
    const agents = ['Android', 'iPhone', 'SymbianOS', 'Windows Phone', 'iPod', 'iPad'];
    for (let i = 0; i < agents.length; i++) {
        if (info.includes(agents[i])) {
            return true;
        }
    }
    return false;
}