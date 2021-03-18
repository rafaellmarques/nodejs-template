import * as _ from 'lodash';
import home from './pages/home';

function component() {
    home.init();
    const element = document.createElement('div');
    element.classList.add('container');

    // Lodash, now imported by this script
    element.innerHTML = _.join(['Welcome', 'to', 'webpack', 'TS'], ' ');

    return element;
}

document.body.appendChild(component());
