import print from './print';

function component() {
    var element = document.createElement('div');

    element.innerHTML = print();

    return element;
}

document.body.appendChild(component());