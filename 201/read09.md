# FORMS
* How to collect information from visitors
* Different kinds of form controls
* New HTML5 form controls

Whether you are adding a simple search box to your website or you need to create more complicated insurance applications, HTML forms give you a set of elements to collect data from your users.
* How to create a form on your website
* The different tools for collecting data
* New HTML5 form controls

## FORM CONTROLS
There are several types of form controls that you can use to collect information from visitors to your site.
* ADDING TEXT:Text input (single-line), Password input, Text area (multi-line)
* MAKING CHOICES:Radio buttons, Checkboxes, Drop-down boxes
* SUBMITTING FORMS:Submit buttons, Image buttons
* UPLOADING FILES:File upload

## FORM STRUCTURE
#### <FORM>
Form controls live inside <form> a element. This element should always carry the action attribute and will usually have a and id attribute too.

#### action
Every <form> element requires an action attribute. Its value is the URL for the page on the server that will receive the information in the form when it is submitted.

#### method
Forms can be sent using one of two methods: get or post.

With the get method, the values from the form are added to the end of the URL specified in the action attribute. The get method is ideal for:

#### short forms (such as search boxes)
when you are just retrieving data from the web server (not sending information that should be added to or deleted from a database)

### TEXT INPUT
* SIZE
* <INPUT>
* TYPE=“TEXT”
* name
* maxlength

### PASSWORD INPUT
* <INPUT> - type=“password”
* name
* size, maxlength

### RADIO BUTTON
* <INPUT> - type=“radio” 
* name
* value
* checked

## SUMMARY
#### FORMS
* Whenever you want to collect information from visitors you will need a form, which lives inside a <form> element.
* Information from a form is sent in name/value pairs.
* Each form control is given a name, and the text the user types in or the values of the options they select are sent to the server.
* HTML5 introduces new form elements which make it easier for visitors to fill in forms.

# LISTS, TABLES AND FORMS
* Specifying bullet point styles
* Adding borders and backgrounds to tables
* Changing the appearance of form elements

There are several CSS properties that were created to work with specific types of HTML elements, such as lists, tables, and forms.
* Specify the type of bullet point or numbering on lists
* Add borders and backgrounds to table cells
* Control the appearance of form controls

## UNORDERED LISTS
For an unordered list you can use the following values:

* none
* • disc
* imagecircle
* imagesquare

## ORDERED LISTS
For an ordered (numbered) list you can use the following values:

1. decimal
2. 1 2 3
3. decimal-leading-zero
4. 01 02 03
5. lower-alpha
6. a b c
7. upper-alpha
8. A B C
9. lower-roman
10. i. ii. iii.
11. upper-roman
12. I II III

## TABLE PROPERTIES
You have already met several properties that are commonly used with tables. Here we will put them together in a single example using the following:
* width to set the width of the table
* padding to set the space between the border of each table cell and its content
* text-transform to convert the content of the table headers to uppercase
* letter-spacing, font-size to add additional styling to the content of the table headers
* border-top, border-bottom to set borders above and below the table headers
* text-align to align the writing to the left of some table cells and to the right of the others
* background-color to change the background color of the alternating table rows
* :hover to highlight a table row when a user's mouse goes over it

### Here are some tips for styling tables to ensure they are clean and easy to follow:

* GIVE CELLS PADDING
* DISTINGUISH HEADINGS
* SHADE ALTERNATE ROWS
* ALIGN NUMERALS
* ONLINE EXTRA

### BORDER ON EMPTY CELLS
#### EMPTY-CELLS 
It can take one of three values: show, hide, inherit

### GAPS BETWEEN CELLS
BORDER-SPACING, BORDER-COLLAPSE - collapse, separate

### STYLING FORMS
CSS is commonly used to control the appearance of form elements. This is both to make them more attractive and to make them more consistent across different browsers

It is most common to style:
* Text inputs and text areas
* Submit buttons
* Labels on forms, to get the form controls to align nicely

### STYLING TEXT INPUTS:
* font-size
* color
* border
* :focus
* background-image

### STYLING SUBMIT BUTTONS
* color
* text-shadow
* border-bottom
* background-color
*  :hover

### STYLING FIELDSETS & LEGENDS
Fieldsets are particularly helpful in determining the edges of a form. In a long form they can help group together related information within it.
The legend is used to indicate what information is required in the fieldset.
Properties commonly used with these two elements include:
* WIDTH
* color
* background-color
* border
* border-radius
* padding

### CURSOR STYLES
The cursor property allows you to control the type of mouse cursor that should be displayed to users.
Here are the most commonly used values for this property:

* auto
* crosshair
* default
* pointer
* move
* text
* wait
* help
* url(“cursor.gif”)

### WEB DEVELOPER TOOLBAR
This helpful extension for Firefox and Chrome provides tools to show you the CSS styles that apply to an element when you hover over it, along with the structure of the HTML.

1. OUTLINES
2. STRUCTURE
3. CSS STYLES

### SUMMARY LISTS, TABLES AND FORMS
* In addition to the CSS properties covered in other chapters which work with the contents of all elements, there are several others that are specifically used to control the appearance of lists, tables, and forms.
* List markers can be given different appearances using the list-style-type and list-style image properties.
* Table cells can have different borders and spacing in different browsers, but there are properties you can use to control them and make them more consistent.
* Forms are easier to use if the form controls are vertically aligned using CSS.
* Forms benefit from styles that make them feel more interactive.

# EVENTS




