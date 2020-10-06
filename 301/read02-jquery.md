# WHAT IS JQUERY?
jQuery is a JavaScript file that you include in your web pages. It lets you find elements using CSS-style selectors and then do something with the elements using jQuery methods.
jQuery is a library you can include to select elements and manipulate elements in the DOM using CSS selectors.

`jQuery('p')` would select all <p> elements.

`$('p')` is shorthand for the same.

Anything you can do in jQuery can be accomplished in vanilla js, but jQuery is much easier to use in many instances, for example:
* loop through DOM elements
* add or remove DOM elements
* events
* fade elements
* AJAX requests

## Selectors
JQ speciic bonus selectors:
* `:input` - input elements
* `:image` - all images
* `:hidden` - hidden elements
* `:visibile` - visible elements
* `:animated` - elements currently being animated

## A MATCHED SET / JQUERY SELECTION
When you select one or more elements, a jQuery object is returned. It is also known as a matched set or a jquery selection.

# CHAINING
The process of placing several methods in the same selector is referred to as chaining.
Ex: `$(li[id!="one"]').hide().delay(500).fadeIn(1400);`

To make your code easier to read, you can place each new method on a new line:
`$(‘li[id!=”one”]’)
  .hide()
  .delay(500)
  .fadeIn(1400);`

## .ready()
`$(document).ready(function() {
  // jQuery script
});`

The `.ready()` method will fire when the page is loaded, so that you can then operate your script. However it will not have waited for all the assets to have loaded, for that use `.on()`.

You can also place the script at the just before the closing body tag, to ensure that the HTML (meaning the DOM) is loaded.

