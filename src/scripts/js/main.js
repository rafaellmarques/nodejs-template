import _ from 'lodash';

const component = () => {
    const element = document.createElement('div');
    element.classList.add('container');

    // Lodash, now imported by this script
    element.innerHTML = _.join(['Welcome', 'to', 'webpack'], ' ');

    return element;
};

document.body.appendChild(component());
