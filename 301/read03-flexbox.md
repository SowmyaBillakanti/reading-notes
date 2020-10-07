# Javascript Templating
Javascript templating is a fast and efficient technique to render client-side view templates with Javascript by using a JSON data source. The template is HTML markup, with added templating tags that will either insert variables or run programming logic.

The template engine then replaces variables and instances declared in a template file with actual values at runtime, and convert the template into an HTML file sent to the client.

## Mustache
Mustache is a logic-less template syntax. It can be used for HTML, config files, source code — anything. It works by expanding tags in a template using values provided in a hash or object.

## Mustache-Express
If you intend you use mustache with Node and Express, you can use mustache-express. Mustache Express lets you use Mustache and Express together easily.
To install:
With Yarn:
`$ yarn add mustache-express`

or with NPM:
`$ npm install mustache --save`


# Flexbox

## Properties for the Parent
(flex container)

* display : This defines a flex container; inline or block depending on the given value. It enables a flex context for all its direct children.
`.container {
  display: flex; /* or inline-flex */
}`

* flex-direction : This establishes the main-axis, thus defining the direction flex items are placed in the flex container. Flexbox is (aside from optional wrapping) a single-direction layout concept. Think of flex items as primarily laying out either in horizontal rows or vertical columns
`.container {
  flex-direction: row | row-reverse | column | column-reverse;
}`

* flex-wrap : By default, flex items will all try to fit onto one line. You can change that and allow the items to wrap as needed with this property.
`.container {
  flex-wrap: nowrap | wrap | wrap-reverse;
}`

* flex-flow: This is a shorthand for the flex-direction and flex-wrap properties, which together define the flex container’s main and cross axes. The default value is row nowrap.
`.container {
  flex-flow: column wrap;
}`

* justify-content: This defines the alignment along the main axis. It helps distribute extra free space leftover when either all the flex items on a line are inflexible, or are flexible but have reached their maximum size. It also exerts some control over the alignment of items when they overflow the line.
`.container {
  justify-content: flex-start | flex-end | center | space-between | space-around | space-evenly | start | end | left | right ... + safe | unsafe;
}`

* align-items: 
`.container {
  align-items: stretch | flex-start | flex-end | center | baseline | first baseline | last baseline | start | end | self-start | self-end + ... safe | unsafe;
}`

* align-content
`.container {
  align-content: flex-start | flex-end | center | space-between | space-around | space-evenly | stretch | start | end | baseline | first baseline | last baseline + ... safe | unsafe;
}`

## Properties for the Children
(flex items)

* order
`.item {
  order: 5; /* default is 0 */
}`

* flex-grow
`.item {
  flex-grow: 4; /* default 0 */
}`

* flex-shrink
`.item {
  flex-shrink: 3; /* default 1 */
}`

* flex-basis
`.item {
  flex-basis:  | auto; /* default auto */
}`

* flex
`.item {
  flex: none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]
}`

* align-self
`.item {
  align-self: auto | flex-start | flex-end | center | baseline | stretch;
}`
