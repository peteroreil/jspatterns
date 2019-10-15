import ReverseDecorator from './ReverseDecorator.mjs';
import BufferDecorator from './BufferDecorator.mjs';
import Reader from './Reader.mjs';

const reader = new Reader('this is a string to read');
const reverseDecorator = new ReverseDecorator(reader);
const bufferDecorator = new BufferDecorator(reverseDecorator);

console.log('reader: ', reader.read());
// => reader:  this is a string to read

// Each Decorator adds additional functionality to the base component
console.log('reversed: ', reverseDecorator.read());
// => reversed:  daer ot gnirts a si siht

const buffered = bufferDecorator.read();
console.log('buffered: ', buffered);
// => buffered:  <Buffer 64 61 65 72 20 6f 74 20 67 6e 69 72 74 73 20 61 20 73 69 20 73 69 68 74>


// Proof :)
console.log('proof: ', buffered.toString());
// => proof:  daer ot gnirts a si siht
