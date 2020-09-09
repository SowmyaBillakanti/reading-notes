# LAYOUT
* Controlling the position of elements
* Creating site layouts
* Designing for different sized screens

### This involves learning about how designing for a screen can be different to designing for other mediums (such as print).
* Explore different ways to position elements using normal flow, relative positioning, absolute positioning and floats.
* Discover how various devices have different screen sizes and resolution, and how this affects the design process.
* Learn the difference between fixed width and liquid layouts, and how they are created.
* Find out how designers use grids to make their page designs look more professional.

### KEY CONCEPTS IN POSITIONING ELEMENTS
* BUILDING BLOCKS
    * BLOCK-LEVEL ELEMENTS - START ON A NEW LINE
    * INLINE ELEMENTS - FLOW IN BETWEEN SURROUNDING TEXT
    * CONTAINING ELEMENTS


### CONTROLLING THE POSITION OF ELEMENTS
CSS has the following positioning schemes that allow you to control the layout of a page: normal flow, relative positioning, and absolute positioning. You specify the positioning scheme using the position property in CSS. You can also float elements using the float property.

* NORMAL FLOW - Position - static
* RELATIVE POSITIONING - Position - Relative
* ABSOLUTE POSITIONING - Position - Absolute
* FIXED POSITIONING - Position - Fixed
* FLOATING ELEMENTS - Position - Float

### CREATING MULTI-COLUMN LAYOUTS WITH FLOATS
* Width
* Float
* Margin

### FIXED WIDTH LAYOUTS
Fixed width layout designs do not change size as the user increases or decreases the size of their browser window. Measurements tend to be given in pixels.

#### ADVANTAGES

* Pixel values are accurate at controlling size and positioning of elements.
* The designer has far greater control over the appearance and position of items on the page than with liquid layouts.
* You can control the lengths of lines of text regardless of the size of the user's window.
* The size of an image will always remain the same relative to the rest of the page.

#### DISADVANTAGES

* You can end up with big gaps around the edge of a page.
* If the user's screen is a much higher resolution than the designer's screen, the page can look smaller and text can be harder to read.
* If a user increases font sizes, text might not fit into the allotted spaces.
* The design works best on devices that have a site or resolution similar to that of desktop or laptop computers.
* The page will often take up more vertical space than a liquid layout with the same content.

### LIQUID LAYOUTS

#### ADVANTAGES

* Pages expand to fill the entire browser window so there are no spaces around the page on a large screen.
* If the user has a small window, the page can contract to fit it without the user having to scroll to the side.
* The design is tolerant of users setting font sizes larger than the designer intended (because the page can stretch).

#### DISADVANTAGES

* If you do not control the width of sections of the page then the design can look very different than you intended, with unexpected gaps around certain elements or items squashed together.
* If the user has a wide window, lines of text can become very long, which makes them harder to read.
* If the user has a very narrow window, words may be squashed and you can end up with few words on each line.
* If a fixed width item (such as an image) is in a box that is too small to hold it (because the user has made the window smaller) the image can overflow over the text.

### LAYOUT GRIDS
Composition in any visual art (such as design, painting, or photography) is the placement or arrangement of visual elements — how they are organized on a page. Many designers use a grid structure to help them position items on a page, and the same is true for web designers.

#### While a grid might seem like a restriction, in actual fact it:

* Creates a continuity between different pages which may use different designs
* Helps users predict where to find information on various pages
* Makes it easier to add new content to the site in a consistent way
* Helps people collaborate on the design of a site in a consistent way

### CSS FRAMEWORKS
CSS frameworks aim to make your life easier by providing the code for common tasks, such as creating layout grids, styling forms, creating printer-friendly versions of pages and so on. You can include the CSS framework code in your projects rather than writing the CSS from scratch.

#### ADVANTAGES

* They save you from repeatedly writing code for the same tasks.
* They will have been tested across different browser versions (which helps avoid browser bugs).

#### DISADVANTAGES

* They often require that you use class names in your HTML code that only control the presentation of the page (rather than describe its content).
* In order to satisfy a wide variety of needs, they often contain more code than you need for your particular web page (commonly referred to as code “bloat”).

### SUMMARY LAYOUT
* <div> elements are often used as containing elements to group together sections of a page.
* Browsers display pages in normal flow unless you specify relative, absolute, or fixed positioning.
* The float property moves content to the left or right of the page and can be used to create multi-column layouts. (Floated items require a defined width.)
* Pages can be fixed width or liquid (stretchy) layouts.
* Designers keep pages within 960-1000 pixels wide, and indicate what the site is about within the top 600 pixels (to demonstrate its relevance without scrolling).
* Grids help create professional and flexible designs.
* CSS Frameworks provide rules for common tasks.
* You can include multiple CSS files in one page.