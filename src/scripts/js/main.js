import _ from 'lodash';
// Pages
import home from './pages/home';

const main = () => {
    home.init();
    const element = document.createElement('div');
    element.classList.add('container');

    // Lodash, now imported by this script
    element.innerHTML = _.join(['Welcome', 'to', 'webpack', 'JS'], ' ');

    return element;
};

document.body.appendChild(main());
