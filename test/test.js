const someNumber = '2';
const otherNumber = '10';

console.info(`numero: ${someNumber}`);

if (someNumber === 2) {
    console.info(someNumber);
}

if (someNumber === 3 && otherNumber === '100') {
    console.info('data 3');
    console.info(`data 3:${otherNumber}`);
}
