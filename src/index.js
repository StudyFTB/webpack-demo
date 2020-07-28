import './style/main.css';
import { cube } from './math.js';

var element = document.createElement('pre');
element.innerHTML = [
     'Hello webpack!',
     '5 cubed is equal to ' + cube(5)
   ].join('\n\n');

   document.body.appendChild(element);


console.log("webpack-demo");
console.log("webpack-demo-error");
console.log(process.env.NODE_ENV);
