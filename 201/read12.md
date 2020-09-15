# Chart
Charts are far better for displaying data visually than tables and have the added benefit that no one is ever going to press-gang them into use as a layout tool. They’re easier to look at and convey data quickly, but they’re not always easy to create.

## Setting up
The first thing we need to do is download Chart.js. Copy the Chart.min.js out of the unzipped folder and into the directory you’ll be working in. Then create a new html page and import the script:
`<!DOCTYPE html>`
`<html lang="en">`
    `<head>`
        `<meta charset="utf-8" />`
        `<title>`Chart.js demo`</title>`
        `<script src='Chart.min.js'>``</script>`
    `</head>`
    `<body>`
    `</body>`
`</html>`

We can draw many charts such as:
* Line chart
* Pie chart
* Bar chart

# Documentation
## Installation
You can download the latest version of Chart.js from the GitHub releases or use a Chart.js CDN. 

## Creating a Chart
It's easy to get started with Chart.js. All that's required is the script included in your page along with a single `<canvas>` node to render the chart.

## Contributing
Before submitting an issue or a pull request to the project, please take a moment to look over the contributing guidelines first.

## License
Chart.js is available under the MIT license.

# Basic usage of Canvas

## The `<canvas>` element
Ex : `<canvas id="tutorial" width="150" height="150">``</canvas>`

## Fallback content
The `<canvas>` element differs from an `<img>` tag in that, like for `<video>`, `<audio>`, or `<picture>` elements, it is easy to define some fallback content, to be displayed in older browsers not supporting it, like versions of Internet Explorer earlier than version 9 or textual browsers. You should always provide fallback content to be displayed by those browsers.

## Required `</canvas>` tag
As a consequence of the way fallback is provided, unlike the `<img>` element, the `<canvas>` element requires the closing tag (`</canvas>`). If this tag is not present, the rest of the document would be considered the fallback content and wouldn't be displayed.

If fallback content is not needed, a simple `<canvas id="foo" ...>``</canvas>` is fully compatible with all browsers that support canvas at all.

## The rendering context
The `<canvas>` element creates a fixed-size drawing surface that exposes one or more rendering contexts, which are used to create and manipulate the content shown. In this tutorial, we focus on the 2D rendering context. Other contexts may provide different types of rendering; for example, WebGL uses a 3D context based on OpenGL ES.

## Checking for support
The fallback content is displayed in browsers which do not support `<canvas>`. Scripts can also check for support programmatically by simply testing for the presence of the getContext() method.

## Drawing rectangles
Unlike SVG, `<canvas>` only supports two primitive shapes: rectangles and paths (lists of points connected by lines). All other shapes must be created by combining one or more paths. Luckily, we have an assortment of path drawing functions which make it possible to compose very complex shapes.

* fillRect(x, y, width, height) - Draws a filled rectangle.
* strokeRect(x, y, width, height) - Draws a rectangular outline.
* clearRect(x, y, width, height) - Clears the specified rectangular area, making it fully transparent.

## Drawing paths
Now let's look at paths. A path is a list of points, connected by segments of lines that can be of different shapes, curved or not, of different width and of different color. A path, or even a subpath, can be closed. To make shapes using paths, we take some extra steps:

* First, you create the path.
* Then you use drawing commands to draw into the path.
* Once the path has been created, you can stroke or fill the path to render it.

# Basic animation steps
These are the steps you need to take to draw a frame:

###### Clear the canvas
* Unless the shapes you'll be drawing fill the complete canvas (for instance a backdrop image), you need to clear any shapes that have been drawn previously. The easiest way to do this is using the clearRect() method - Save the canvas state
* If you're changing any setting (such as styles, transformations, etc.) which affect the canvas state and you want to make sure the original state is used each time a frame is drawn, you need to save that original state - Draw animated shapes
* The step where you do the actual frame rendering - Restore the canvas state
* If you've saved the state, restore it before drawing a new frame.

# Colors
Up until now we have only seen methods of the drawing context. If we want to apply colors to a shape, there are two important properties we can use: fillStyle and strokeStyle.

* fillStyle = color - Sets the style used when filling shapes.
* strokeStyle = color - Sets the style for shapes' outlines.

## Transparency
In addition to drawing opaque shapes to the canvas, we can also draw semi-transparent (or translucent) shapes. This is done by either setting the globalAlpha property or by assigning a semi-transparent color to the stroke and/or fill style.

- globalAlpha = transparencyValue
Applies the specified transparency value to all future shapes drawn on the canvas. The value must be between 0.0 (fully transparent) to 1.0 (fully opaque). This value is 1.0 (fully opaque) by default.

## Line styles
There are several properties which allow us to style lines.

* lineWidth = value - Sets the width of lines drawn in the future.
* lineCap = type - Sets the appearance of the ends of lines.
* lineJoin = type - Sets the appearance of the "corners" where lines meet.
* miterLimit = value - Establishes a limit on the miter when two lines join at a sharp angle, to let you control how thick the junction becomes.
* getLineDash() - Returns the current line dash pattern array containing an even number of non-negative numbers.
* setLineDash(segments) - Sets the current line dash pattern.
* lineDashOffset = value - Specifies where to start a dash array on a line.

# Drawing text
The canvas rendering context provides two methods to render text:

* fillText(text, x, y [, maxWidth]) - Fills a given text at the given (x,y) position. Optionally with a maximum width to draw.
* strokeText(text, x, y [, maxWidth]) - Strokes a given text at the given (x,y) position. Optionally with a maximum width to draw.

## Styling text
In the examples above we are already making use of the font property to make the text a bit larger than the default size. There are some more properties which let you adjust the way the text gets displayed on the canvas:

* font = value - The current text style being used when drawing text. This string uses the same syntax as the CSS font property. The default font is 10px sans-serif.
* textAlign = value - Text alignment setting. Possible values: start, end, left, right or center. The default value is start.
* textBaseline = value - Baseline alignment setting. Possible values: top, hanging, middle, alphabetic, ideographic, bottom. The default value is alphabetic.
* direction = value - Directionality. Possible values: ltr, rtl, inherit. The default value is inherit.

