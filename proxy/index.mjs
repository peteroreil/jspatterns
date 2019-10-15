import Proxy from './Proxy.mjs';

const proxy = new Proxy();

try {
    proxy.getResource();
} catch (e) {
    console.log(e.message);
    // => Whoops, no name
}

const resource = proxy.getResource('one');
console.log(`Resource: ${resource}`);
// => Resource: super expensive resource
