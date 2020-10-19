# What is EJS?
EJS is a simple templating language that lets you generate HTML markup with plain JavaScript. No religiousness about how to organize things. No reinvention of iteration and control-flow. It's just plain JavaScript.

### To install
`$ npm install ejs`

### Example
Pass EJS a template string and some data. BOOM, you've got some HTML.
``` 
let ejs = require('ejs');
let people = ['geddy', 'neil', 'alex'];
let html = ejs.render('<%= people.join(", "); %>', {people: people});
```
## How To Use EJS to Template Your Node Application
- Setting up the Demo App
- Node Setup
- Start Up our Server
- Create the EJS Partials
- Add the EJS Partials to Views
- Pass Data to Views and Partials
