import { resolve } from 'path';

const pages = [
    {name: 'main', path: resolve(__dirname, '/index.html')},
    {name: 'bathHouse', path: resolve(__dirname, '/src/pages/bathHouse.html')},
    {name: 'brickHouse', path: resolve(__dirname, '/src/pages/brickHouse.html')},
    {name: 'projectHouse', path: resolve(__dirname, '/src/pages/projectHouse.html')},
    {name: 'company', path: resolve(__dirname, '/src/pages/company.html')},
];

export default pages;