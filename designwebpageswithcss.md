# Introduction to CSS
What CSS does
How CSS works
Rules, properties, and values

 we will look at how to make your web pages more attractive, controlling the design of them using CSS.
 
 Using CSS, you could add a border around any of the boxes, specify its width and height, or add a background color. You could also control text inside a box — for example, its color, size, and the typeface used.

## EXAMPLE STYLES
### BOXES
Width and height

Borders (color, width, and style)

Background color and images

Position in the browser window.

## TEXT
Typeface

Size

Color

Italics, bold, uppercase, lowercase, small-caps

## USING EXTERNAL CSS
<Link>
The <link> element can be used in an HTML document to tell the browser where to find the CSS file used to style the page. It is an empty element (meaning it does not need a closing tag), and it lives inside the <head> element. It should use three attributes:

### href
This specifies the path to the CSS file (which is often placed in a folder called css or styles).

### type
This attribute specifies the type of document being linked to. The value should be text/css.

### rel
This specifies the relationship between the HTML page and the file it is linked to. The value should be stylesheet when linking to a CSS file.

## USING INTERNAL CSS
<STYLE>
You can also include CSS rules within an HTML page by placing them inside a <style> element, which usually sits inside the <head> element of the page.

The <style> element should use the type attribute to indicate that the styles are specified in CSS. The value should be text/css.



