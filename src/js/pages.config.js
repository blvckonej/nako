import { resolve } from 'path';

const pages = [
    {name: 'main', path: resolve(__dirname, '/index.html')},
    {name: 'bathHouse', path: resolve(__dirname, '/src/pages/bathHouse.html')},
    {name: 'brickHouse', path: resolve(__dirname, '/src/pages/brickHouse.html')},
    {name: 'projectHouse', path: resolve(__dirname, '/src/pages/projectHouse.html')},
    {name: 'company', path: resolve(__dirname, '/src/pages/company.html')},
    {name: 'projectPage', path: resolve(__dirname, '/src/pages/products.html')},
    {name: '404', path: resolve(__dirname, '/src/pages/404.html')},
    {name: 'policy', path: resolve(__dirname, '/src/pages/policy.html')},
    {name: 'order', path: resolve(__dirname, '/src/pages/order.html')},
    {name: 'vacancies', path: resolve(__dirname, '/src/pages/vacancies.html')},
];

export default pages;