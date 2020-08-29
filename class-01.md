# 1: HTML
How HTML is used to create web pages. 
We will start by writing down the words we want to appear on our page. 
We then add tags or elements to the words so that the browser knows what is a heading, where a paragraph begins and ends, and so on.
# 2: CSS
Presentation
Layout
# 3: PRACTICAL

## HOW WEBSITES ARE CREATED
All websites use HTML and CSS, but content management systems, blogging software, and e-commerce platforms often add a few more technologies into the mix.
WHAT YOU SEE
HOW IT IS CREATED
HTML5& CSS3

## STRUCTURE
Understanding structure
Learning about markup
Tags and elements

## HTML DESCRIBES THE STRUCTURE OF PAGES
HTML USES ELEMENTS TO DESCRIBE THE STRUCTURE OF PAGES
Code
Description
ATTRIBUTES TELL US MORE ABOUT ELEMENTS
HTML pages are text documents
HTML uses tags (characters that sit inside angled brackets) to give the information they surround special meaning.
Tags are often referred to as elements.
Tags usually come in pairs. The opening tag denotes the start of a piece of content; the closing tag denotes the end.
Opening tags can carry attributes, which tell us more about the content of that element.
Attributes require a name and a value.
To learn HTML you need to know what tags are available for you to use, what they do, and where they can go.


## EXTRA MARKUP
Specifying different versions of HTML
Identifying and grouping elements
Comments, meta information and iframes

### What is ID Attribute?
Every HTML element can carry the id attribute. It is used to uniquely identify that element from other elements on the page. Its value should start with a letter or an underscore (not a number or any other character). It is important that no two elements on the same page have the same value for their id attributes (otherwise the value is no longer unique).

### What is Class Attribute?
Every HTML element can also carry a class attribute. Sometimes, rather than uniquely identifying one element within a document, you will want a way to identify several elements as being different from the other elements on the page. For example, you might have some paragraphs of text that contain information that is more important than others and want to distinguish these elements, or you might want to differentiate between links that point to other pages on your own site and links that point to external sites.

### What are Block Elements?
Some elements will always appear to start on a new line in the browser window. These are known as block level elements.

### What are INLINE ELEMENTS?
Some elements will always appear to continue on the same line as their neighbouring elements. These are known as inline elements.

### IFRAME
An iframe is like a little window that has been cut into your page — and in that window you can see another page. The term iframe is an abbreviation of inline frame.

An iframe is created using the <iframe> element. There are a few attributes that you will need to know to use it:

#### src
The src attribute specifies the URL of the page to show in the frame.

#### height
The height attribute specifies the height of the iframe in pixels.

#### width
The width attribute specifies the width of the iframe in pixels.

### HTML5 LAYOUT
#### HTML5 layout elements
How old browsers understand new elements
Styling HTML5 layout elements with CSS

### HEADERS & FOOTERS
<HEADER> <FOOTER>
The <header> and <footer> elements can be used for:

The main header or footer that appears at the top or bottom of every page on the site.
A header or footer for an individual <article> or <section> within the page.

### NAVIGATION
The <nav> element is used to contain the major navigational blocks on the site such as the primary site navigation.

### ARTICLES
<ARTICLE>
The <article> element acts as a container for any section of a page that could stand alone and potentially be syndicated.

### ASIDES
The <aside> element has two purposes, depending on whether it is inside an <article> element or not.

### SECTIONS
The <section> element groups related content together, and typically each section would have its own heading.

### HEADING GROUPS
The purpose of the <hgroup> element is to group together a set of one or more <h1> through <h6> elements so that they are treated as one single heading.

## PROCESS & DESIGN
How to approach building a site
Understanding your audience and their needs
How to present information visitors want to see

### WHY PEOPLE VISIT YOUR WEBSITE
Now that you know who your visitors are, you need to consider why they are coming. While some people will simply chance across your website, most will visit for a specific reason.

Your content and design should be influenced by the goals of your users.

To help determine why people are coming to your website, there are two basic categories of questions you can ask:

1: The first attempts to discover the underlying motivations for why visitors come to the site.

2: The second examines the specific goals of the visitors. These are the triggers making them come to the site now.

### KEY MOTIVATIONS
Are they looking for general entertainment or do they need to achieve a specific goal?
If there is a specific goal, is it a personal or professional one?
Do they see spending time on this activity as essential or a luxury?
### SPECIFIC GOALS
Do they want general information / research (such as background on a topic / company), or are they after something specific (such as a particular fact or information on a product)?
Are they already familiar with the service or product that you offer or do they need to be introduced to it?
Are they looking for time sensitive information, such as the latest news or updates on a particular topic?
Do they want to discover information about a specific product or service to help them decide whether to buy it or not?

## HOW OFTEN PEOPLE WILL VISIT YOUR SITE
Here are some questions to help you decide how often to update your website content…

### GOODS / SERVICES
How often do the same people return to purchase from you?
How often is your stock updated or your service changed?
### INFORMATION
How often is the subject updated?
What percentage of your visitors would return for regular updates on the subject, compared with those who will just need the information once?

## WIREFRAMES
A wireframe is a simple sketch of the key information that needs to go on each page of a site. It shows the hierarchy of the information and how much space it might require.

### GETTING YOUR MESSAGE ACROSS USING DESIGN
PRIORITIZING
ORGANIZING
VISUAL HIERARCHY
GROUPING
SIMILARITY


#### VISUAL HIERARCHY
SIZE
COLOR
STYLE
IMAGES


# ProcessingJS
If you're new to JavaScript or ProcessingJS, you can learn more from this course: Intro to JS.

## Shapes
rect(x, y, w, h)
ellipse(x, y, w, h)
triangle(x1, y1, x2, y2, x3, y3)
line(x1, y1, x2, y2)
point(x, y)
arc(x, y, w, h, start, stop)
bezier(x1, y1, cx1, cy1, cx2, cy2, x2, y2)
quad(x1, y1, x2, y2, x3, y3, x4, y4)
image(image, x, y, width*, height*)
See also: ellipseMode, rectMode, imageMode, strokeCap, bezierPoint, bezierTangent, curve, curvePoint, curveTangent, curveTightness

## Complex Shapes
beginShape() / endShape() / vertex()
curveVertex()
bezierVertex()
See also: strokeJoin, curveTightness

## Colors
background(r, g, b)
Set the background color
fill(r, g, b)
Set the fill color for shapes
noFill()
Turn off fill for shapes
stroke(r, g, b)
Set the outline color for shapes
strokeWeight(thickness)
Change the thickness of lines and outlines
noStroke()
Turn off outlines for shapes
color(r, g, b)
Store a color in a variable
blendColor(c1, c2, MODE)
Blend two colors together
lerpColor(c1, c2, amount)
Find color between 2 colors
See also: colorMode, red, green, blue, alpha, hue, saturation, brightness

## Text
text(text, x, y)
Draw some text
textFont(font, size*)
Changes the font of text
textSize(size)
Change the size of text
See also: textWidth, textAscent, textDescent, textLeading, textAlign

## Transform
rotate(angle)
Rotate shapes by an angle
scale(amount)
Scale shapes in both dimensions
translate(x, y)
Translate shapes by an offset
See also: pushMatrix/popMatrix, resetMatrix, printMatrix

## Environment
width / height
The size of the canvas
draw = function() { }
Called repeatedly during program execution
playSound(sound)
Plays one of the allowed sounds
See also: Program.assertEqual, Program.restart, frameRate(fps), frameCount, loop, noLoop

## Mouse
mouseX, mouseY
Current coordinates of the mouse
pmouseX, pmouseY
Past coordinates of the mouse
mouseButton
Which button is pressed
mouseIsPressed
Whether mouse is being pressed
mouseClicked = function() { }
Called when mouse is clicked
mousePressed = function() { }
Called when mouse is pressed
mouseReleased = function() { }
Called when mouse is released
mouseMoved = function() { }
Called when mouse is moved
mouseDragged = function() { }
Called when mouse is dragged
mouseOver = function() { }
Called when mouse moves over canvas
mouseOut = function() { }
Called when mouse moves out of canvas
Keyboard
key
Number representing which key is pressed
keyCode
Represents when a special key is pressed
keyIsPressed
True if a key is being pressed, false otherwise
keyPressed = function() { }
Called when a key is pressed
keyReleased = function() { }
Called when a key is released
keyTyped = function() { }
Called when a key is typed

## Math
random(low, high)
Generate a random number
dist(x1, y1, x2, y2)
Calculates the distance between two points
constrain(value, min, max)
Constrain value between min and max
min(num1, num2)
Return the minimum of two numbers
max(num1, num2)
Return the maximum of two numbers
abs(num)
Take the absolute value of a number
log(num)
Take the logarithm of a number
pow(num, exponent)
Raise a number to an exponent
sq(num)
Square a number
sqrt(num)
Take the square root of a number
round(num)
Return nearest integer
ceil(num)
Return nearest integer of greater/equal value
floor(num)
Return nearest integer of lesser/equal value
PVector(x, y)
An object that describes a 2-dimensional vector
See also: mag, exp, map, norm, lerp, noise, noiseDetail, Random.nextGaussian

## Trigonometry
cos(degrees)
Take the cosine of an angle
sin(degrees)
Take the sine of an angle
tan(degrees)
Take the tangent of an angle
See also: acos, asin, atan, atan2, radians, degrees, angleMode

## Date & Time
day() / month() / year()
Current date
hour() / minute() / second()
Current time
millis()
Milliseconds elapsed since program start
Debugging
debug(arg1, arg2, ...)
Print to your browser's developer console
println(data)
Print a new line to the canvas console
print(data)
Print to the canvas console
JavaScript
var drawWinston = function() { }
Define a new function
var array = [0, 1, 2, 3, 4]
Make an array of 5 numbers
if (x < 20) { }
Only run code if a certain condition is true
for (var i = 0; i < 8; i++) { }
Repeat code a fixed number of times
while (x < 250) { }
Only run code while a certain condition is true
