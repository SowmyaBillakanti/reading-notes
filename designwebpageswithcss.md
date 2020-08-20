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


COLOR
How to specify colors
Color terminology and contrast
Background color
Color can really bring your pages to life.

FOREGROUND COLOR
COLOR
The color property allows you to specify the color of text inside an element. You can specify any color in CSS in one of three ways:

RGB VALUES
These express colors in terms of how much red, green and blue are used to make it up. For example: rgb(100,100,90)

HEX CODES
These are six-digit codes that represent the amount of red, green and blue in a color, preceded by a pound or hash # sign. For example: #ee3e80

COLOR NAMES
There are 147 predefined color names that are recognized by browsers. For example: DarkCyan

We look at these three different ways of specifying colors on the next double-page spread.

CONTRAST
When picking foreground and background colors, it is important to ensure that there is enough contrast for the text to be legible.

Text is harder to read when there is low contrast between background and foreground colors.

A lack of contrast is particularly a problem for those with visual impairments and color blindness.

It also affects those with poor monitors and sunlight on their screens (which is increasingly common as people use handheld devices outdoors).

Text is easier to read when there is higher contrast between background and foreground colors.

If you want people to read a lot of text on your page, however, then too much contrast can make it harder to read, too.

For long spans of text, reducing the contrast a little bit improves readability.

You can reduce contrast by using dark gray text on a white background or an off-white text on a dark background.

To check contrast there is a handy online tool at: www.snook.ca/technical/colour_contrast/colour.html

The hsl color property has been introduced in CSS3 as an alternative way to specify colors. The value of the property starts with the letters hsl, followed by individual values inside parentheses for:

HUE
This is expressed as an angle (between 0 and 360 degrees).

SATURATION
This is expressed as a percentage.

LIGHTNESS
This is expressed as a percentage with 0% being white, 50% being normal, and 100% being black.

The hsla color property allows you to specify color properties using hue, saturation, and lightness as above, and adds a fourth value which represents transparency (just like the rgba property). The a stands for:

ALPHA
This is expressed as a number between 0 and 1.0. For example, 0.5 represents 50% transparency, and 0.75 represents 75% transparency.