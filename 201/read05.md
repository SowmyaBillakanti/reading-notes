# IMAGES
* How to add images to pages
* Choosing the right format
* Optimizing images for the web

There are many reasons why you might want to add an image to a web page: you might want to include a logo, photograph, illustration, diagram, or chart.

There are several things to consider when selecting and preparing images for your site, but taking time to get them right will make it look more attractive and professional. We will see:
* Include an image in your web pages using HTML
* Pick which image format to use
* Show an image at the right size
* Optimize an image for use on the web to make pages load faster

## CHOOSING IMAGES FOR YOUR SITE
### IMAGES SHOULD…
* Be relevant
* Convey information
* Convey the right mood
* Be instantly recognisable
* Fit the color palette

### STOCK PHOTOS
* www.istockphoto.com
* www.gettyimages.com
* www.veer.com
* www.sxc.hu
* www.fotolia.com

### ONLINE EXTRA

## STORING IMAGES ON YOUR SITE
### ADDING IMAGES - 
* <IMG>
* src
* alt
* title

### HEIGHT & WIDTH OF IMAGES
* height
This specifies the height of the image in pixels.

* width
This specifies the width of the image in pixels.

### WHERE TO PLACE IMAGES IN YOUR CODE
#### BEFORE A PARAGRAPH
The paragraph starts on a new line after the image.

#### INSIDE THE START OF A PARAGRAPH
The first row of text aligns with the bottom of the image.

#### IN THE MIDDLE OF A pARAGRApH
The image is placed between the words of the paragraph that it appears in.

### OLD CODE: ALIGNING IMAGES HORIZONTALLY
#### ALIGN
The align attribute was commonly used to indicate how the other parts of a page should flow around an image.
The align attribute can take these horizontal values:

#### left
This aligns the image to the left (allowing text to flow around its right-hand side).

#### right
This aligns the image to the right (allowing text to flow around its left-hand side).

### OLD CODE: ALIGNING IMAGES VERTICALLY
There are three values that the align attribute can take that control how the image should align vertically with the text that surrounds it:

#### TOP
This aligns the first line of the surrounding text with the top of the image.

#### middle
This aligns the first line of the surrounding text with the middle of the image.

#### bottom
This aligns the first line of the surrounding text with the bottom of the image.

### IMAGE DIMENSIONS
* ONLINE EXTRA
* REDUCING IMAGE SIZE
* INCREASING IMAGE SIZE
* CHANGING SHAPE

### CROPPING IMAGES
* PORTRAIT
* LANDSCAPE

### IMAGE RESOLUTION
Images created for the web should be saved at a resolution of 72 ppi. The higher the resolution of the image, the larger the size of the file.

JPGs, GIFs, and PNGs belong to a type of image format known as bitmap. They are made up of lots of miniature squares. The resolution of an image is the number of squares that fit within a 1 inch × 1 inch square area.

### EXAMINING IMAGES ON THE WEB
* CHECKING THE SIZE OF IMAGES
* DOWNLOADING IMAGES

### SUMMARY IMAGES
* The <img> element is used to add images to a web page.
* You must always specify a src attribute to indicate the source of an image and an alt attribute to describe the content of an image.
* You should save images at the size you will be using them on the web page and in the appropriate format.
* Photographs are best saved as JPEGs; illustrations or logos that use flat colors are better saved as GIFs.

# COLOR
* How to specify colors
* Color terminology and contrast
* Background color

Color can really bring your pages to life.
* How to specify colors, as there are three common ways in which you can indicate your choice of colors (plus extra ways made available in CSS3)
* Color terminology, as there are some terms that are very helpful to understand when it comes to picking colors
* Contrast, and ensuring that your text is readable
* Background colors for behind either your entire page or parts of a page

### FOREGROUND COLOR
* RGB VALUES - rgb(129, 200, 160)
* HEX CODES -   #66cda

### COLOR NAMES
* HUE
* SATURATION
* BRIGHTNESS

### CONTRAST
* Low contrast
* High contrast
* Medium contrast

### SUMMARY COLOR
* Color not only brings your site to life, but also helps convey the mood and evokes reactions.
* There are three ways to specify colors in CSS: RGB values, hex codes, and color names.
Color pickers can help you find the color you want.
* It is important to ensure that there is enough contrast between any text and the background color (otherwise people will not be able to read your content).
* CSS3 has introduced an extra value for RGB colors to indicate opacity. It is known as RGBA.
* CSS3 also allows you to specify colors as HSL values, with an optional opacity value. It is known as HSLA.

# TEXT
* Size and typeface of text
* Bold, italics, capitals, underlines
* Spacing between lines, words, and letters

The properties that allow you to control the appearance of text can be split into two groups:

* Those that directly affect the font and its appearance (including the typeface, whether it is regular, bold or italic, and the size of the text)
* Those that would have the same effect on text no matter what font you were using (including the color of text and the spacing between words and letters)

### TYPEFACE TERMINOLOGY
#### SERIF
Serif fonts have extra details on the ends of the main strokes of the letters. These details are known as serifs.

#### SANS-SERIF
Sans-serif fonts have straight ends to letters, and therefore have a much cleaner design.

#### MONOSPACE
Every letter in a monospace (or fixed-width) font is the same width. (Non-monospace fonts have different widths.)

#### WEIGHT
The font weight not only adds emphasis but can also affect the amount of white space and contrast on a page.

#### STYLE
Italic fonts have a cursive aspect to some of the lettering. Oblique font styles take the normal style and put it on an angle.

#### STRETCH
In condensed (or narrow) versions of the font, letters are thinner and closer together. In expanded versions they are thicker and further apart.

### SIZE OF TYPE
* FONT-SIZE
* PIXELS
* PERCENTAGES
* EMS

### MORE FONT CHOICE
* @FONT-FACE
* font-family
* src
* format

### BOLD
* FONT-WEIGHT
* normal
* bold

### ITALIC
* FONT-STYLE
* normal
* italic
* oblique

### UPPERCASE & LOWERCASE
* TEXT-TRANSFORM
* uppercase
* lowercase
* capitalize

### UNDERLINE & STRIKE
* TEXT-DECORATION
* none
* underline
* overline
* line-through
* blink

### ALIGNMENT
* TEXT-ALIGN
* left
* right
* center
* justify

### VERTICAL ALIGNMENT
* baseline
* sub
* super
* top
* text-top
* middle
* bottom
* text-bottom

### SUMMARY TEXT
* There are properties to control the choice of font, size, weight, style, and spacing.
* There is a limited choice of fonts that you can assume most people will have installed.
* If you want to use a wider range of typefaces there are several options, but you need to have the right license to use them.
* You can control the space between lines of text, individual letters, and words. Text can also be aligned to the left, right, center, or justified. It can also be indented.
* You can use pseudo-classes to change the style of an element when a user hovers over or clicks on text, or when they have visited a link.
